interface B {
    b: number;

}

const test = () => {
    const a: B = {
        b: 1,
    }
    console.log('test: ', a.b);
};

export default test;

(window as any).test = test;
