interface SortingStrategy {
  sort(arr: number[]): number[];
  getName(): string;
}

class BubbleSort implements SortingStrategy {
  getName(): string {
    return 'Bubble Sort';
  }

  sort(arr: number[]): number[] {
    const result = [...arr];
    const n = result.length;
    for (let i = 0; i < n - 1; i++) {
      for (let j = 0; j < n - i - 1; j++) {
        if (result[j] > result[j + 1]) {
          [result[j], result[j + 1]] = [result[j + 1], result[j]];
        }
      }
    }
    return result;
  }
}

class QuickSort implements SortingStrategy {
  getName(): string {
    return 'Quick Sort';
  }

  sort(arr: number[]): number[] {
    if (arr.length <= 1) return [...arr];

    const result = [...arr];
    const pivot = result[result.length - 1];
    const left: number[] = [];
    const right: number[] = [];

    for (let i = 0; i < result.length - 1; i++) {
      if (result[i] < pivot) {
        left.push(result[i]);
      } else {
        right.push(result[i]);
      }
    }

    return [...this.sort(left), pivot, ...this.sort(right)];
  }
}

class MergeSort implements SortingStrategy {
  getName(): string {
    return 'Merge Sort';
  }

  sort(arr: number[]): number[] {
    if (arr.length <= 1) return [...arr];

    const middle = Math.floor(arr.length / 2);
    const left = arr.slice(0, middle);
    const right = arr.slice(middle);

    return this.merge(this.sort(left), this.sort(right));
  }

  private merge(left: number[], right: number[]): number[] {
    const result: number[] = [];
    let leftIndex = 0;
    let rightIndex = 0;

    while (leftIndex < left.length && rightIndex < right.length) {
      if (left[leftIndex] < right[rightIndex]) {
        result.push(left[leftIndex]);
        leftIndex++;
      } else {
        result.push(right[rightIndex]);
        rightIndex++;
      }
    }

    return result.concat(left.slice(leftIndex)).concat(right.slice(rightIndex));
  }
}

class Sorter {
  private strategy: SortingStrategy | null = null;

  setSortingStrategy(strategy: SortingStrategy): void {
    this.strategy = strategy;
  }

  sort(arr: number[]): number[] {
    if (!this.strategy) {
      throw new Error('No sorting strategy set');
    }
    const sorted = this.strategy.sort(arr);
    console.log(`${this.strategy.getName()}: [${sorted.join(', ')}]`);
    return sorted;
  }
}

const sorter = new Sorter();
const testArray = [5, 3, 8, 1, 2];

sorter.setSortingStrategy(new BubbleSort());
sorter.sort([...testArray]);

sorter.setSortingStrategy(new QuickSort());
sorter.sort([...testArray]);

sorter.setSortingStrategy(new MergeSort());
sorter.sort([...testArray]);
