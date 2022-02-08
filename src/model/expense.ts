export class Expense {
  private constructor(
    public readonly description: string,
    public readonly value: number,
    public readonly date?: Date,
  ) {}

  get id() {
    return this.date;
  }

  static create(dto: Omit<Expense, 'id'>): Expense | Error {
    if(dto.description.trim() === '') {
      return new Error('description cannot be null');
    }
    return new Expense(
      dto.description,
      dto.value,
      new Date(),
    );
  }
}
