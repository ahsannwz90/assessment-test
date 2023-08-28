import { Box } from '@mui/material'
import  QRscanImage from '../../../assets/images/qr-scan.png'

function QRScan() {
    return (
        <Box className="qr-scan-box">
            <img src={QRscanImage} width={'100%'} alt='QR Scan' /> 
        </Box>
    )
}
export default QRScan