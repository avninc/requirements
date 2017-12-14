module.exports = getFlag;

/**
 * Returns command line flag to output bin's version
 *
 * @param {String} bin
 */
function getFlag(bin) {
    let flag;

    switch(bin) {
        case 'adb':
            flag = 'version';
            break;
        case 'java':
            flag = '-version';
        case 'httpd':
            flag = '-v';
        default:
            break;
    }

    return flag
}

