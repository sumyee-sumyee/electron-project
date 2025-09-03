
// var remote = require('electron').remote;
const remote = require("@electron/remote")
console.log(remote, 'remote', remote.require)
var electronFs = remote.require('fs') ;
var path = require('path');
const CREATE_ANOTHER_LOG_FILE_MAX_CNT = 10;


export class LogUtils {
   
    constructor(filepath, jsonPath, objsArr) {
        this.filepath = filepath;   // .csv路径
        this.objsArray = objsArr;   // 需要存储的对象数组
        this.jsonPath = jsonPath    // json数据

        if(null == filepath || null == objsArr){
            throw "NullPointErr"
        }
        // this.srcLogPath = path + '/Src_' + filename + ".txt";
        this.decoderLogPath = filepath;
        this.logWriteStream = null;

        this.OpenLogWriteStream(this.jsonPath);

    }

    /**
     * 日志原始数据保存
     * @param {string} content 需要保存的字符好
     */
    WriteSrcLog(content) {
        //console.log(content)
        // electronFs.appendFile(this.srcLogPath, content, function () {
        //     console.log('追加内容完成');
        // });
    }

    /**
     * 触发日志写入
     * @param {String} dateTime 时间字符串
     */
    WriteDecoderLog(dateTime = null) {
        if (null == this.logWriteStream) {
            console.error("Write ERR: Make sure the LogUtils class is instantiated")
        }
        let array = new Array();

        /* 第一个字段为时间 */
        if(null == dateTime){
            array.push(this._CurentDateTime().toLocaleString('chinese', {hour12:false}))
        }else{
            /* 外部时间 */
            array.push(dateTime);
        }
        /* 遍历数组的所有对象 */
        this.objsArray.forEach(element => {
            for (let item in element) {
                array.push(element[item]);
                //console.log(item, element[item]);
            }
        });

        array.push("\r\n");

        this._WriteDecoderBuffer(array.join(','))
    }

    /**
     * 关闭日志输入流
     */
    CloseLogWriteStream() {
        this.logWriteStream.end('', () => {
            /* 关闭流之后，对齐写入流对象 */
            console.log(null == this.logWriteStream)
            this.logWriteStream.destroy(0)
            this.logWriteStream = null;
        });
    }

    /**
     * 打开日志输入流
     */
    OpenLogWriteStream(jsonPath) {

        // await this.dirExists(this.decoderLogPath)
        if (null == this.logWriteStream) {
            /* use open function to check state of  the target file */
            electronFs.open(this.decoderLogPath, 'r+', (err) => {
                if (err && err.code === 'EBUSY') {
                    /* the file is busy or be locked, then create a new one */
                    console.warn('the file is busy')

                    let idx = 0;
                    /* create file list userSetFilename_1.csv */
                    for (idx = 0; idx < CREATE_ANOTHER_LOG_FILE_MAX_CNT; ++idx) {
                        let backupFilename = path.dirname(this.decoderLogPath) + '\\' + path.basename(this.decoderLogPath, '.csv') + '_' + idx + '.csv';
                        //console.log('try new file name', backupFilename);

                        /* check the file exist? */
                        try {
                            electronFs.statSync(backupFilename);
                        } catch (err) {
                            this.decoderLogPath2 = backupFilename;

                            /* Create file now, this is a new file, must write a head first */
                            this.logWriteStream = electronFs.createWriteStream(this.decoderLogPath2, {
                                flags: 'a'
                            });
                            this._InitDecoderLogFeild(this.objsArray, jsonPath);
                            break;
                        }
                    }

                    if (idx >= CREATE_ANOTHER_LOG_FILE_MAX_CNT) {
                        // TODO: user occupy so maney file, show a dialog to prompt user.
                        return;
                    }
                } else if (err && err.code === 'ENOENT') {
                    console.log('the file is not exist.');
                    /* Not Exist  */
                    this.logWriteStream = electronFs.createWriteStream(this.decoderLogPath, {
                        flags: 'a'
                    });
                    /* create the table of head */
                    this._InitDecoderLogFeild(this.objsArray ,jsonPath);
                    console.log("The log file isn't exist. create new file.")

                } else {
                    console.log('the file is exist and can read/write')
                    /* Exist ans without creating head */
                    /* create a write stream with append mode */
                    this.logWriteStream = electronFs.createWriteStream(this.decoderLogPath, {
                        flags: 'a'
                    });
                }

                /* Register the error of write-err callback */
                this.logWriteStream.on('error', () => {
                    // TODO: if an error occurred while writing or piping data. The listener callback is passed a single Error argument when called.
                    console.warn('the write error');
                });
            });



        }
    }

    _CurentDateTime() {
        var now = new Date();

        var year = now.getFullYear(); //年
        var month = now.getMonth() + 1; //月
        var day = now.getDate(); //日

        var hh = now.getHours(); //时
        var mm = now.getMinutes(); //分
        var sec = now.getSeconds(); // 秒

        var clock = year + "-";

        if (month < 10)
            clock += "0";

        clock += month + "-";

        if (day < 10)
            clock += "0";

        clock += day + " ";
        if (hh < 10)
            clock += "0";

        clock += hh + ":";
        if (mm < 10) clock += '0';

        clock += mm + ":";
        if (sec < 10) clock += '0';
        clock += sec;

        return (clock);
    }

    _WriteDecoderBuffer(str) {
        this.logWriteStream.write(str,
            'utf8',
            function (err) {
                if (err) {
                    // TODO: 写入流出错
                    console.error("write log stream error");
                } else {
                    console.log("write log successfully!")
                }
            });
    }

    _FileIsBusy(filePath) {
        electronFs.open(filePath, 'r+', function (err, fd) {
            if (err && err.code === 'EBUSY') {
                //do nothing till next loop
            } else if (err && err.code === 'ENOENT') {
                console.log(filePath, 'deleted');
            } else {
                fs.close(fd, function () {
                    fs.unlink(filePath, function (err) {
                        if (err) {
                            // eslint
                        } else {
                            console.log(filePath, 'deleted');
                        }
                    });
                });
            }
        });
    }

    _InitDecoderLogFeild(objsArr, jsonPath) {
        let array = new Array();

        // console.log(__dirname);
        let jsonObj = null

        /* 第一个字段为时间 */
        array.push("时间");
        try{
            jsonObj = JSON.parse(electronFs.readFileSync(jsonPath, 'utf8').toString()); //读取的值 
            //jsonObj = JSON.parse(electronFs.readFileSync(__dirname + "\\log\\InsideLogMap.json", 'utf8').toString()); //读取的值 
        }catch(err){
            // TODO: json文件不存在
            console.log("Can not found the json file.");
            return;
        }
        /* 遍历数组的所有对象 */
        objsArr.forEach(element => {
            for (let item in element) {
                array.push(jsonObj[item]);
                console.log(jsonObj[item])
            }
        });

        array.push("\r\n");

        // let timerhandle = setInterval(() => {
        this._WriteDecoderBuffer(array.join(','))
 
    }
    
}