let env = process.env
const config = {
    deviceType: 'web',
    service: {
        BASE_URL: env.REACT_APP_SERVICE_BASE_URL
    }
}
export default config