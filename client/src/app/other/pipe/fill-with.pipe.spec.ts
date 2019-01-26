import { FillWithPipe } from './fill-with.pipe';

describe('FillWithPipe', () => {

  let pipe: FillWithPipe;

  beforeAll(() => {
    pipe = new FillWithPipe();
  });

  it('should create an instance', done => {
    expect(pipe).toBeTruthy();
    done();
  });

  it('input: 1, length: 2, fill: default, output: "01"', done => {
    expect(pipe.transform(1, 2)).toBe('01');
    done();
  });

  it('input: "A", length: 2, fill: default, output: "0A"', done => {
    expect(pipe.transform('A', 2)).toBe('0A');
    done();
  });

  it('input: 1, length: 2, fill: "X", output: "X1"', done => {
    expect(pipe.transform(1, 2, 'X')).toBe('X1');
    done();
  });

  it('input: "A", length: 2, fill: "X", output: "XA"', done => {
    expect(pipe.transform('A', 2, 'X')).toBe('XA');
    done();
  });

  it('input: 111, length: 2, fill: default, output: "111"', done => {
    expect(pipe.transform(111, 2)).toBe('111');
    done();
  });

  it('input: "AAA", length: 2, fill: default, output: "AAA"', done => {
    expect(pipe.transform('AAA', 2)).toBe('AAA');
    done();
  });

});
