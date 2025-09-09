
/* 串口默认消息事件 */
export const APP_EVNT_UART_DEFAULT_CONNECT_ERR           = "uart-default-conn-err"    // 串口
/* View --> MainProcess */
export const APP_CMD_DEFAULT_OPEN_LOG_PATH_SELECT_DIALOG = "open-log-path_sel_dialog" // 打开路径选择对话框
/* MainProcess --> View */
export const APP_REPORT_DEFAULT_LOG_PATH                 = "log-path" // 日志路径

/* 内机消息事件 */
/* View --> MainProcess */
export const APP_CMD_UART_INDOOR_REFLASH    = "uart-indoor-reflash"    // 刷新串口
export const APP_CMD_UART_INDOOR_CONNECT    = "uart-indoor-connect"    // 连接串口
export const APP_CMD_UART_INDOOR_DISCONN    = "uart-indoor-disconn"    // 断开串口连接

export const APP_TOUCH_BUTTON_SEND_MULT_CMD     = "rs485-write-multiple"    // 写内存
export const APP_TOUCH_BUTTON_SEND_SINGLE_CMD   = "rs485-write-single"      // 设置手动参数
export const APP_TOUCH_BUTTON_READ_CMD         = "rs485-read"              // 设置手动参数

export const APP_MAIN_SWITCH_JOINT_UNIT      = "switch-main-joint-unit"     // 
export const APP_SWITCH_JOINT_UNIT      = "switch-joint-unit"     // 

export const APP_CMD_MEM_INDOOR_LOAD_FILE   = "memory-indoor-loadfile" // 加载bin文件

export const  APP_CMD_LOAD_FILE_NAME        = "indoor-loadfile-name" // 加载bin文件


export const APP_CMD_GET_MANUAL_DATA        = "get-manual-data"         // 设置手动参数

export const APP_CMD_SET_WIRTE_SYSTEM_DATA  = "set-wirte-system-data"   // 设置系统参数
export const APP_CMD_SET_READ_SYSTEM_DATA   = "set-read-system-data"    // 设置系统参数
export const APP_CMD_GET_SYSTEM_DATA        = "get-system-data"         // 设置系统参数
export const APP_CMD_SET_PARAM_DATA         = "set-system-param"         // 设置系统参数
export const APP_REPORT_UART_DATA           = 'receive-data-broadcast'
export const APP_REPORT_TOUCH_READ_DATA     = 'receive-data-touch-read'
export const APP_EVENT_STORE_FILE_DIALOG    = 'store-data'
export const APP_WATCH_DATA_REFRESH         = 'watch-data-refresh'

/* MainProcess --> View */
export const APP_REPORT_UART_INDOOR_CONNECT_OK             = "uart-indoor-connect-ok"             // 串口连接成功
export const APP_REPORT_UART_INDOOR_CONNECT_ERR            = "uart-indoor-connect-err"            // 串口连接失败
export const APP_REPORT_UART_INDOOR_UNCONNECT              = "uart-indoor-unconnect"              // 串口未连接
export const APP_REPORT_UART_INDOOR_SEND_ERR               = "uart-indoor-send-err"               // 串口数据发送失败
export const APP_REPORT_UART_INDOOR_RECV_QUERY_CMD_PKG     = "uart-indoor-recv-query-cmd-pkg"     // 串口查询反馈数据包
export const APP_REPORT_UART_INDOOR_RECV_AIR_QUALITY_PKG   = "uart-indoor-recv-air-quality-pkg"   // 串口空气质量反馈数据包
export const APP_REPORT_UART_INDOOR_RECV_ELECTRI_QUERY_PKG = "uart-indoor-recv-electri-query-pkg" // 串口电量反馈数据包
export const APP_REPORT_UART_INDOOR_LOG                    = "uart-indoor-log"                    // 数据包日志显示
export const APP_REPORT_INDOOR_DIALOG_PROMPT               = "indoor-dialog-prompt"               // 前端显示对话框
export const APP_REPORT_MEM_INDOOR_WRITE                   = "respond-memory-indoor-write"        // 写内存反馈
export const APP_REPORT_MEM_INDOOR_READ                    = "respond-memory-indoor-read"         // 读内存反馈
export const APP_REPORT_MEM_INDOOR_BURN                    = "respond-memory-indoor-burn"         // 烧写EEPROM
export const APP_REPORT_MEM_INDOOR_PROGRAM                 = "respond-memory-indoor-program"      // 烧写进度

/* EventBus: Setting Page --> MainView */
export const EVNT_SETTING_INDOOR_LOG_SWITCH                = "setting-indoor-log-switch"          // 日志开关
export const EVNT_SETTING_INDOOR_DEVOP_SWITCH              = "setting-indoor-devop-switch"        // 开发者选项
export const EVNT_INDOOR_PAUSE_QUERY                       = "indoor-pause-query"                 // 暂停查询设备信息（用于进行内存、EEPROM操作时，进行暂停）
export const EVNT_INDOOT_RESUME_QUERY                      = "indoor-resume-query"                // 重新开始查询设备信息

export const EVNT_COMM_SHOW_DIALOG                         = "common-show-dialog"
