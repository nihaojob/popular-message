const $msg = require('../src/index')
jest.useFakeTimers();

describe('图标类型与颜色', () => {

    test('info', () => {
        const iconStr = $msg._getIcon('info')
        expect(iconStr.includes('#2db7f5')).toBe(true);
    });

    test('success', () => {
        const iconStr = $msg._getIcon('success')
        expect(iconStr.includes('#19be6b')).toBe(true);
    });

    test('warning', () => {
        const iconStr = $msg._getIcon('warning')
        expect(iconStr.includes('#ff9900')).toBe(true);
    });

    test('error', () => {
        const iconStr = $msg._getIcon('error')
        expect(iconStr.includes('#ed4014')).toBe(true);
    });

    test('loading', () => {
        const iconStr = $msg._getIcon('loading')
        expect(iconStr.includes('#2db7f5')).toBe(true);
    });
});


describe('对象类型', () => {

    test('content', () => {
        $msg.destroy()
        $msg.info({
            content: '对象文本'
        })
        const boxDom = document.querySelector('.popular-message').innerHTML
        expect(boxDom.includes('对象文本')).toBe(true);
    });

});


describe('图标类型与颜色', () => {
    test('info', () => {
        const iconStr = $msg._getIcon('info')
        expect(iconStr.includes('#2db7f5')).toBe(true);
    });

    test('success', () => {
        const iconStr = $msg._getIcon('success')
        expect(iconStr.includes('#19be6b')).toBe(true);
    });

    test('warning', () => {
        const iconStr = $msg._getIcon('warning')
        expect(iconStr.includes('#ff9900')).toBe(true);
    });

    test('error', () => {
        const iconStr = $msg._getIcon('error')
        expect(iconStr.includes('#ed4014')).toBe(true);
    });

    test('loading', () => {
        const iconStr = $msg._getIcon('loading')
        expect(iconStr.includes('#2db7f5')).toBe(true);
    });
});




describe('类型调用', () => {
    test('info', () => {
        $msg.destroy()
        $msg.info('这是一条带关闭按钮的消息')
        const boxDom = document.querySelector('.popular-message').innerHTML
        expect(boxDom.includes('#2db7f5') && boxDom.includes('M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z')).toBe(true);
    });
    test('success', () => {
        $msg.destroy()
        $msg.success('这是一条带关闭按钮的消息')
        const boxDom = document.querySelector('.popular-message').innerHTML
        expect(boxDom.includes('M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z')).toBe(true);
    });
    test('warning', () => {
        $msg.destroy()
        $msg.warning('这是一条带关闭按钮的消息')
        const boxDom = document.querySelector('.popular-message').innerHTML
        expect(boxDom.includes('#ff9900') && boxDom.includes('M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z')).toBe(true);
    });

    test('error', () => {
        $msg.destroy()
        $msg.error('这是一条带关闭按钮的消息')
        const boxDom = document.querySelector('.popular-message').innerHTML
        expect(boxDom.includes('M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z')).toBe(true);
    });
    test('loading', () => {
        $msg.destroy()
        $msg.loading('这是一条带关闭按钮的消息')
        const boxDom = document.querySelector('.popular-message').innerHTML
        expect(boxDom.includes('M9.504 1.132a1 1 0 01.992 0l1.75 1a1 1 0 11-.992 1.736L10 3.152l-1.254.716a1 1 0 11-.992-1.736l1.75-1zM5.618 4.504a1 1 0 01-.372 1.364L5.016 6l.23.132a1 1 0 11-.992 1.736L4 7.723V8a1 1 0 01-2 0V6a.996.996 0 01.52-.878l1.734-.99a1 1 0 011.364.372zm8.764 0a1 1 0 011.364-.372l1.733.99A1.002 1.002 0 0118 6v2a1 1 0 11-2 0v-.277l-.254.145a1 1 0 11-.992-1.736l.23-.132-.23-.132a1 1 0 01-.372-1.364zm-7 4a1 1 0 011.364-.372L10 8.848l1.254-.716a1 1 0 11.992 1.736L11 10.58V12a1 1 0 11-2 0v-1.42l-1.246-.712a1 1 0 01-.372-1.364zM3 11a1 1 0 011 1v1.42l1.246.712a1 1 0 11-.992 1.736l-1.75-1A1 1 0 012 14v-2a1 1 0 011-1zm14 0a1 1 0 011 1v2a1 1 0 01-.504.868l-1.75 1a1 1 0 11-.992-1.736L16 13.42V12a1 1 0 011-1zm-9.618 5.504a1 1 0 011.364-.372l.254.145V16a1 1 0 112 0v.277l.254-.145a1 1 0 11.992 1.736l-1.735.992a.995.995 0 01-1.022 0l-1.735-.992a1 1 0 01-.372-1.364z')).toBe(true);
    });
});
describe('定时关闭', () => {
    test('关闭方法执行', () => {
        let resault = false
        $msg.info('这是一条带关闭按钮的消息', {
            onClose: () => resault = true,
        })
        jest.runTimersToTime(2900);
        expect(resault).toBe(true);
    });
    test('关闭按钮存在', () => {
        $msg.info('这是一条带关闭按钮的消息', {
            closable: true
        })
        const btn = document.querySelector('.i-message-btn')
        expect(!!btn).toBe(true);
    });
    test('不定时关闭', () => {
        $msg.info('这是一条带关闭按钮的消息', {
            closable: true,
            duration: 0
        })
        jest.runTimersToTime(2900);
        let btn = document.querySelector('.i-message-btn')
        expect(!!btn).toBe(true);
        jest.runTimersToTime(100000);
        btn = document.querySelector('.i-message-btn')
        expect(!!btn).toBe(true);
    });
});

describe('config方法', () => {
    test('延迟关闭', () => {
        $msg.destroy()
        $msg.config({
            duration: 3
        })
        $msg.info('这是一条带关闭按钮的消息')
        let msgDom = document.querySelectorAll('.i-message-box')
        expect(msgDom.length).toBe(1);
        jest.runTimersToTime(4000);
        msgDom = document.querySelectorAll('.i-message-box')
        expect(msgDom.length).toBe(0);
    });

    test('顶部距离', () => {
        $msg.destroy()
        $msg.config({
            top:85,
        })
        $msg.info('这是一条带关闭按钮的消息')
        const top = document.querySelector('.popular-message').style.top
        expect(top).toBe('85px');
    });

    test('默认设置 + 多次设置', () => {
        $msg.destroy()
        $msg.info('这是一条带关闭按钮的消息')
        let top = document.querySelector('.popular-message').style.top
        expect(top).toBe('16px');
        $msg.config({ top:85 })
        top = document.querySelector('.popular-message').style.top
        expect(top).toBe('85px');
    });
});

describe('模式', () => {
    test('单例', () => {
        $msg.destroy()
        $msg.config({singleton:true})
        $msg.info('这是一条带关闭按钮的消息')
        $msg.info('这是一条带关闭按钮的消息')
        $msg.info('这是一条带关闭按钮的消息')
        $msg.info('这是一条带关闭按钮的消息')
        $msg.info('这是一条带关闭按钮的消息')
        let msgDom = document.querySelectorAll('.i-message-box')
        expect(msgDom.length).toBe(1);
    });

    test('多例', () => {
        $msg.destroy()
        $msg.info('这是一条带关闭按钮的消息')
        $msg.info('这是一条带关闭按钮的消息')
        $msg.info('这是一条带关闭按钮的消息')
        $msg.info('这是一条带关闭按钮的消息')
        $msg.info('这是一条带关闭按钮的消息')
        let msgDom = document.querySelectorAll('.i-message-box')
        expect(msgDom.length).toBe(5);
    });
});