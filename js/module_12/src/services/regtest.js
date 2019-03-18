function testUrl(url){
    console.log(`been here`)
    const test = /(https?:\/\/)(www.)?[0-9a-z_.-]+.[\w.]{2,5}\/?$/i;
    return test.test(url);
}

export {testUrl}