export class Income  {
  private constructor(
    public readonly value: number,
  ) {  }

  create(value: number) {
    return new Income(value);
  }
}
