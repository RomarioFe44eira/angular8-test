import { MaskIdPipe } from './mask-id.pipe';

describe('MaskIdPipe', () => {
  it('Deve Criar uma instância de maskid pipe', () => {
    const pipe = new MaskIdPipe();
    expect(pipe).toBeTruthy();
  });
});
