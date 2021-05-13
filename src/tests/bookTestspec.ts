import { Book, BookStore } from '../models/bookModel';

const store = new BookStore()

describe("Book Model", () => {
  it('should have an index method', () => {
    expect(store.index).toBeDefined();
  });

  it('should have a show method', () => {
    expect(store.create).toBeDefined();
  });

  it('should have a create method', () => {
    expect(store.show).toBeDefined();
  });

  it('should have a update method', () => {
    expect(store.delete).toBeDefined();
  });

  it('should have a delete method', () => {
    expect(store.index).toBeDefined();
  });

  it('create method should add a book', async () => {
    const result = await store.create({
      id:1,
      title: 'Bridge to Terabithia',
      total_pages: 250,
      author: 'Katherine Paterson',
      summary:'f',
    });
    expect(result).toEqual({
      id: 1,
      title: 'Bridge to Terabithia',
      total_pages: 250,
      author: 'Katherine Paterson',
      summary:"f"
    });
  });

  it('index method should return a list of books', async () => {
    const result = await store.index();
    expect(result).toEqual([{
      id: 1,
      title: 'Bridge to Terabithia',
      total_pages: 250,
      author: 'Katherine Paterson',
      summary:'f'
    }]);
  });

  it('show method should return the correct book', async () => {
    const result = await store.show(1);
    expect(result).toEqual({
      id: 1,
      title: 'Bridge to Terabithia',
      total_pages: 250,
      author: 'Katherine Paterson',
      summary:'f'
    });
  });

  it('delete method should remove the book', async () => {
    store.delete(1);
    const result = await store.index()

    expect(result).toEqual([]);
  });
});