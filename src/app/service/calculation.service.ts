import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CalculationService {
  calculateMatrix(N: number): number[][] {
    const matrix: number[][] = [];
    const modifiedElements: number[] = [];

    for (let i = 0; i < N; i++) {
      matrix[i] = [];
      for (let j = 0; j < N; j++) {
        const element = i * j;
        if (element % 3 === 0 && element % 7 === 0) {
          matrix[i][j] = 11;
          modifiedElements.push(element);
        } else if (element % 3 === 0) {
          matrix[i][j] = 43;
          modifiedElements.push(element);
        } else if (element % 7 === 0) {
          matrix[i][j] = 47;
          modifiedElements.push(element);
        } else {
          matrix[i][j] = element;
        }
      }
    }

    return matrix;
  }

  getModifiedElements(matrix: number[][]): number[] {
    const modifiedElements: number[] = [];

    for (let i = 0; i < matrix.length; i++) {
      for (let j = 0; j < matrix[i].length; j++) {
        if (this.isModified(matrix[i][j])) {
          modifiedElements.push(matrix[i][j]);
        }
      }
    }

    return modifiedElements;
  }

  isModified(element: number): boolean {
    return element === 11 || element === 43 || element === 47;
  }
}
