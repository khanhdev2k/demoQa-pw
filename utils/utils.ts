// utils.ts
export class Utils {
    static compareValues(actual: any, expected: any, message: string): boolean {
      const result = actual === expected;
      console.log(`${message}: ${result ? 'Pass' : 'Fail'} (Actual: ${actual}, Expected: ${expected})`);
      return result;
    }
  
    static waitWithTimeout(page: any, selector: string, timeoutMs: number = 10000): Promise<void> {
      return page.waitForSelector(selector, { state: 'visible', timeout: timeoutMs })
        .catch(() => console.log(`Timeout after ${timeoutMs}ms waiting for ${selector}`));
    }
  
    static getCurrentDate(format: string = 'YYYY-MM-DD'): string {
      const date = new Date();
      const year = date.getFullYear();
      const month = String(date.getMonth() + 1).padStart(2, '0');
      const day = String(date.getDate()).padStart(2, '0');
      return format.replace('YYYY', year).replace('MM', month).replace('DD', day);
    }
  }