export const VERSION_MOST = 0x03 			// �汾�Ÿ�λ
export const VERSION_LEFT = 0x00 			// �汾�ŵص�λ

export class InData {
    constructor(PKG_HEAD) {
        this.pkgHead = PKG_HEAD;				
        this.sendPackage = [PKG_HEAD,0x00,0x01];
    }

    //��ȡ��ѯ����
    GetQueryPackage(Cmd){
        let QueryData = this.sendPackage.concat();
        QueryData[3] = Cmd;								//��������
        this._SetPkgVersion(QueryData);					//���ݰ��汾
        this._SetPkgLength(QueryData);					//������峤��
        QueryData[7] = this._CalcCheckNum(QueryData);	//����У��

        //console.log("QueryData>>>", QueryData);
        return QueryData;
    }

    /**
     * �������ݰ�
     * @param {int} Cmd ������
     * @param {array} pkg_body ��������
     */
    CreatePackage(Cmd, pkg_body){
        let TransmitData = this.sendPackage.concat();

        TransmitData[3] = Cmd;								//��������
        this._SetPkgVersion(TransmitData);					//���ݰ��汾
        this._SetPkgBody(TransmitData, pkg_body);			//������� 
        this._SetPkgLength(TransmitData);					//������峤��
        TransmitData.push(this._CalcCheckNum(TransmitData))	//����У��
        return TransmitData;
    }

    /**
     * Э����������������岿�ֵ�����
     * @param {Array} recvPkg ��Ҫ���������ݰ�
     */
    PkgAnalysis(recvPkg){
        let left_length = recvPkg.length;
    
        /* 0x00: �ҵ���ͷ */
        let pkgHeadIdx = recvPkg.indexOf(this.pkgHead);
        //console.log("pkghead:", pkgHeadIdx);

        /* �ж��Ƿ�����ǰ�ͷ, ͨ���жϰ�ͷ��Դ��ַ��Ŀ�ĵ�ַ */
        if(-1 == pkgHeadIdx && 0x01 != recvPkg[pkgHeadIdx+1] && 0x00 != recvPkg[pkgHeadIdx+2]){
            //console.log("pkg head error!!!")
            return null;
        }
        recvPkg = recvPkg.slice(pkgHeadIdx);

        /* 0x01: �����ݰ��ĳ��� */
        let pkgLength = recvPkg[4];
        if(pkgLength > recvPkg.length - 6){
            /* ���ܵ����ݳ��������� */
           // console.log("pkg length error!!!")
            return null;
        }
       // console.log("pkg length:", pkgLength);

        /* 0x02:У���ж� */
        if(this._CalcCheckNum(recvPkg) != this._GetCheckNum(recvPkg)){
            //console.log("check code error!!!");
        }

        /* ���������ģ������� */
        return {type : recvPkg[3], sonPkg : recvPkg.slice(4, pkgLength+5), srcPkg : recvPkg}
    }

    _SetPkgLength(pkg)
    {
        pkg[4] = pkg.length - 5;
    }
    
    _SetPkgVersion(pkg)
    {
        pkg[5] = VERSION_MOST; // �汾�Ÿ�λ
        pkg[6] = VERSION_LEFT; // �汾�ŵ�λ
    }

    _SetPkgBody(pkg, body){
        // `body` onto `pkg`:
        pkg.push.apply(pkg, body);
    }

    /**
     * ����У��ֵ
     * @param {array} pkg ���ݰ�
     * @param {int} len ��ҪУ������ݳ���
     */
    _CalcCheckNum(pkg){
        let check = 0;
        
        /* ֱ�Ӵ����ݰ���ȡ���ĳ��� */
        for(let i = 0; i < 5+pkg[4]; ++i){
            check ^= pkg[i];
        }

        return check;
    }

    /**
     * ��ȡ���ݰ�����У��ֵ
     * @param {array} pkg ���ݰ�
     */
    _GetCheckNum(pkg)
    {
        /* ���峤��+��ͷ���� */
        return pkg[5+pkg[4]];
    }

}