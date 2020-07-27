
var documents = [{
    "id": 0,
    "url": "/Malgeon/404.html",
    "title": "404",
    "body": "404 Page does not exist!Please use the search bar at the top or visit our homepage! "
    }, {
    "id": 1,
    "url": "/Malgeon/about",
    "title": "About",
    "body": " 여기는 공사중이에요! 금방 찾아올게요!"
    }, {
    "id": 2,
    "url": "/Malgeon/robots.txt",
    "title": "",
    "body": "      Sitemap: {{ “sitemap. xml”   absolute_url }}   "
    }, {
    "id": 3,
    "url": "/Malgeon/Project/index.html",
    "title": "Project",
    "body": ""
    }, {
    "id": 4,
    "url": "/Malgeon/Project/page2/index.html",
    "title": "Project",
    "body": ""
    }, {
    "id": 5,
    "url": "/Malgeon/index.html",
    "title": "Main",
    "body": ""
    }, {
    "id": 6,
    "url": "/Malgeon/page2/index.html",
    "title": "Main",
    "body": ""
    }, {
    "id": 7,
    "url": "/Malgeon/page3/index.html",
    "title": "Main",
    "body": ""
    }, {
    "id": 8,
    "url": "/Malgeon/page4/index.html",
    "title": "Main",
    "body": ""
    }, {
    "id": 9,
    "url": "/Malgeon/page5/index.html",
    "title": "Main",
    "body": ""
    }, {
    "id": 10,
    "url": "/Malgeon/Study/c/index.html",
    "title": "tags",
    "body": "c "
    }, {
    "id": 11,
    "url": "/Malgeon/Study/c/page2/index.html",
    "title": "tags",
    "body": "c "
    }, {
    "id": 12,
    "url": "/Malgeon/Study/java/index.html",
    "title": "tags",
    "body": "java "
    }, {
    "id": 13,
    "url": "/Malgeon/Study/java/page2/index.html",
    "title": "tags",
    "body": "java "
    }, {
    "id": 14,
    "url": "/Malgeon/Study/programming/index.html",
    "title": "tags",
    "body": "programming "
    }, {
    "id": 15,
    "url": "/Malgeon/study_CODE_hash_1/",
    "title": "해시 : 완주하지 못한 선수",
    "body": "2020/07/22 - 문제 설명99한자리 숫자가 적힌 종이 조각이 흩어져있습니다. 흩어진 종이 조각을 붙여 소수를 몇 개 만들 수 있는지 알아내려 합니다. 각 종이 조각에 적힌 숫자가 적힌 문자열 numbers가 주어졌을 때, 종이 조각으로 만들 수 있는 소수가 몇 개인지 return 하도록 solution 함수를 완성해주세요. 입출력 예 | n | result | | — | — | | “17” | 3 | | “011” | 2 | 문제풀이전체 순열 조합을 구하고, 그 중 primeNumber를 걸러낸다. 그 개수가 정답. 1234567891011121314151617181920212223242526272829303132333435363738function solution(numbers) {  const numberList = numbers. split('');  const findPrimeNumbers = (stringList, prevNumber) =&gt; {    const caliPrevNumber = prevNumber || '';    return stringList. reduce((list, value, idx) =&gt; {      if (isPrimeNumber(Number(caliPrevNumber + value))) {        list. push(Number(caliPrevNumber + value));      }      const nextList = [. . . stringList];      nextList. splice(idx, 1);      const result = findPrimeNumbers(      nextList,      caliPrevNumber + value,      );      list. push(. . . result);      return list;    }, []);  }  const answers = findPrimeNumbers(numberList);  return [. . . new Set(answers)]. length; //중복값 제거. }function isPrimeNumber(number) {  const notPrime = [0, 1];  if (notPrime. includes(number)) return false;  for (let i = 2; i * i &lt;= number; i++) {    if (number % i === 0) return false;  }  return true;}"
    }, {
    "id": 16,
    "url": "/Malgeon/study_CODE_hash_1-copy-8/",
    "title": "해시 : 완주하지 못한 선수",
    "body": "2020/07/20 - 문제 설명88한자리 숫자가 적힌 종이 조각이 흩어져있습니다. 흩어진 종이 조각을 붙여 소수를 몇 개 만들 수 있는지 알아내려 합니다. 각 종이 조각에 적힌 숫자가 적힌 문자열 numbers가 주어졌을 때, 종이 조각으로 만들 수 있는 소수가 몇 개인지 return 하도록 solution 함수를 완성해주세요. 입출력 예 | n | result | | — | — | | “17” | 3 | | “011” | 2 | 문제풀이전체 순열 조합을 구하고, 그 중 primeNumber를 걸러낸다. 그 개수가 정답. 1234567891011121314151617181920212223242526272829303132333435363738function solution(numbers) {  const numberList = numbers. split('');  const findPrimeNumbers = (stringList, prevNumber) =&gt; {    const caliPrevNumber = prevNumber || '';    return stringList. reduce((list, value, idx) =&gt; {      if (isPrimeNumber(Number(caliPrevNumber + value))) {        list. push(Number(caliPrevNumber + value));      }      const nextList = [. . . stringList];      nextList. splice(idx, 1);      const result = findPrimeNumbers(      nextList,      caliPrevNumber + value,      );      list. push(. . . result);      return list;    }, []);  }  const answers = findPrimeNumbers(numberList);  return [. . . new Set(answers)]. length; //중복값 제거. }function isPrimeNumber(number) {  const notPrime = [0, 1];  if (notPrime. includes(number)) return false;  for (let i = 2; i * i &lt;= number; i++) {    if (number % i === 0) return false;  }  return true;}"
    }, {
    "id": 17,
    "url": "/Malgeon/study_CODE_hash_1-copy-7/",
    "title": "해시 : 완주하지 못한 선수",
    "body": "2020/07/20 - 문제 설명77한자리 숫자가 적힌 종이 조각이 흩어져있습니다. 흩어진 종이 조각을 붙여 소수를 몇 개 만들 수 있는지 알아내려 합니다. 각 종이 조각에 적힌 숫자가 적힌 문자열 numbers가 주어졌을 때, 종이 조각으로 만들 수 있는 소수가 몇 개인지 return 하도록 solution 함수를 완성해주세요. 입출력 예 | n | result | | — | — | | “17” | 3 | | “011” | 2 | 문제풀이전체 순열 조합을 구하고, 그 중 primeNumber를 걸러낸다. 그 개수가 정답. 1234567891011121314151617181920212223242526272829303132333435363738function solution(numbers) {  const numberList = numbers. split('');  const findPrimeNumbers = (stringList, prevNumber) =&gt; {    const caliPrevNumber = prevNumber || '';    return stringList. reduce((list, value, idx) =&gt; {      if (isPrimeNumber(Number(caliPrevNumber + value))) {        list. push(Number(caliPrevNumber + value));      }      const nextList = [. . . stringList];      nextList. splice(idx, 1);      const result = findPrimeNumbers(      nextList,      caliPrevNumber + value,      );      list. push(. . . result);      return list;    }, []);  }  const answers = findPrimeNumbers(numberList);  return [. . . new Set(answers)]. length; //중복값 제거. }function isPrimeNumber(number) {  const notPrime = [0, 1];  if (notPrime. includes(number)) return false;  for (let i = 2; i * i &lt;= number; i++) {    if (number % i === 0) return false;  }  return true;}"
    }, {
    "id": 18,
    "url": "/Malgeon/study_CODE_hash_1-copy-6/",
    "title": "해시 : 완주하지 못한 선수",
    "body": "2020/07/20 - 문제 설명66한자리 숫자가 적힌 종이 조각이 흩어져있습니다. 흩어진 종이 조각을 붙여 소수를 몇 개 만들 수 있는지 알아내려 합니다. 각 종이 조각에 적힌 숫자가 적힌 문자열 numbers가 주어졌을 때, 종이 조각으로 만들 수 있는 소수가 몇 개인지 return 하도록 solution 함수를 완성해주세요. 입출력 예 | n | result | | — | — | | “17” | 3 | | “011” | 2 | 문제풀이전체 순열 조합을 구하고, 그 중 primeNumber를 걸러낸다. 그 개수가 정답. 1234567891011121314151617181920212223242526272829303132333435363738function solution(numbers) {  const numberList = numbers. split('');  const findPrimeNumbers = (stringList, prevNumber) =&gt; {    const caliPrevNumber = prevNumber || '';    return stringList. reduce((list, value, idx) =&gt; {      if (isPrimeNumber(Number(caliPrevNumber + value))) {        list. push(Number(caliPrevNumber + value));      }      const nextList = [. . . stringList];      nextList. splice(idx, 1);      const result = findPrimeNumbers(      nextList,      caliPrevNumber + value,      );      list. push(. . . result);      return list;    }, []);  }  const answers = findPrimeNumbers(numberList);  return [. . . new Set(answers)]. length; //중복값 제거. }function isPrimeNumber(number) {  const notPrime = [0, 1];  if (notPrime. includes(number)) return false;  for (let i = 2; i * i &lt;= number; i++) {    if (number % i === 0) return false;  }  return true;}"
    }, {
    "id": 19,
    "url": "/Malgeon/study_CODE_hash_1-copy-5/",
    "title": "해시 : 완주하지 못한 선수",
    "body": "2020/07/20 - 문제 설명55한자리 숫자가 적힌 종이 조각이 흩어져있습니다. 흩어진 종이 조각을 붙여 소수를 몇 개 만들 수 있는지 알아내려 합니다. 각 종이 조각에 적힌 숫자가 적힌 문자열 numbers가 주어졌을 때, 종이 조각으로 만들 수 있는 소수가 몇 개인지 return 하도록 solution 함수를 완성해주세요. 입출력 예 | n | result | | — | — | | “17” | 3 | | “011” | 2 | 문제풀이전체 순열 조합을 구하고, 그 중 primeNumber를 걸러낸다. 그 개수가 정답. 1234567891011121314151617181920212223242526272829303132333435363738function solution(numbers) {  const numberList = numbers. split('');  const findPrimeNumbers = (stringList, prevNumber) =&gt; {    const caliPrevNumber = prevNumber || '';    return stringList. reduce((list, value, idx) =&gt; {      if (isPrimeNumber(Number(caliPrevNumber + value))) {        list. push(Number(caliPrevNumber + value));      }      const nextList = [. . . stringList];      nextList. splice(idx, 1);      const result = findPrimeNumbers(      nextList,      caliPrevNumber + value,      );      list. push(. . . result);      return list;    }, []);  }  const answers = findPrimeNumbers(numberList);  return [. . . new Set(answers)]. length; //중복값 제거. }function isPrimeNumber(number) {  const notPrime = [0, 1];  if (notPrime. includes(number)) return false;  for (let i = 2; i * i &lt;= number; i++) {    if (number % i === 0) return false;  }  return true;}"
    }, {
    "id": 20,
    "url": "/Malgeon/study_CODE_hash_1-copy-4/",
    "title": "해시 : 완주하지 못한 선수",
    "body": "2020/07/20 - 문제 설명44한자리 숫자가 적힌 종이 조각이 흩어져있습니다. 흩어진 종이 조각을 붙여 소수를 몇 개 만들 수 있는지 알아내려 합니다. 각 종이 조각에 적힌 숫자가 적힌 문자열 numbers가 주어졌을 때, 종이 조각으로 만들 수 있는 소수가 몇 개인지 return 하도록 solution 함수를 완성해주세요. 입출력 예       n   result         “17”   3       “011”   2   문제풀이전체 순열 조합을 구하고, 그 중 primeNumber를 걸러낸다. 그 개수가 정답. 1234567891011121314151617181920212223242526272829303132333435363738function solution(numbers) {  const numberList = numbers. split('');  const findPrimeNumbers = (stringList, prevNumber) =&gt; {    const caliPrevNumber = prevNumber || '';    return stringList. reduce((list, value, idx) =&gt; {      if (isPrimeNumber(Number(caliPrevNumber + value))) {        list. push(Number(caliPrevNumber + value));      }      const nextList = [. . . stringList];      nextList. splice(idx, 1);      const result = findPrimeNumbers(      nextList,      caliPrevNumber + value,      );      list. push(. . . result);      return list;    }, []);  }  const answers = findPrimeNumbers(numberList);  return [. . . new Set(answers)]. length; //중복값 제거. }function isPrimeNumber(number) {  const notPrime = [0, 1];  if (notPrime. includes(number)) return false;  for (let i = 2; i * i &lt;= number; i++) {    if (number % i === 0) return false;  }  return true;}"
    }, {
    "id": 21,
    "url": "/Malgeon/study_CODE_hash_1-copy-3/",
    "title": "해시 : 완주하지 못한 선수",
    "body": "2020/07/20 - 문제 설명33한자리 숫자가 적힌 종이 조각이 흩어져있습니다. 흩어진 종이 조각을 붙여 소수를 몇 개 만들 수 있는지 알아내려 합니다. 각 종이 조각에 적힌 숫자가 적힌 문자열 numbers가 주어졌을 때, 종이 조각으로 만들 수 있는 소수가 몇 개인지 return 하도록 solution 함수를 완성해주세요. 입출력 예 | n | result | | — | — | | “17” | 3 | | “011” | 2 | 문제풀이전체 순열 조합을 구하고, 그 중 primeNumber를 걸러낸다. 그 개수가 정답. 1234567891011121314151617181920212223242526272829303132333435363738function solution(numbers) {  const numberList = numbers. split('');  const findPrimeNumbers = (stringList, prevNumber) =&gt; {    const caliPrevNumber = prevNumber || '';    return stringList. reduce((list, value, idx) =&gt; {      if (isPrimeNumber(Number(caliPrevNumber + value))) {        list. push(Number(caliPrevNumber + value));      }      const nextList = [. . . stringList];      nextList. splice(idx, 1);      const result = findPrimeNumbers(      nextList,      caliPrevNumber + value,      );      list. push(. . . result);      return list;    }, []);  }  const answers = findPrimeNumbers(numberList);  return [. . . new Set(answers)]. length; //중복값 제거. }function isPrimeNumber(number) {  const notPrime = [0, 1];  if (notPrime. includes(number)) return false;  for (let i = 2; i * i &lt;= number; i++) {    if (number % i === 0) return false;  }  return true;}"
    }, {
    "id": 22,
    "url": "/Malgeon/study_CODE_hash_1-copy/",
    "title": "해시 : 완주하지 못한 선수",
    "body": "2020/07/17 - 문제 설명22한11자리 숫자가 적힌 종이 조각이 흩어져있습니다. 흩어진 종이 조각을 붙여 소수를 몇 개 만들 수 있는지 알아내려 합니다. 각 종이 조각에 적힌 숫자가 적힌 문자열 numbers가 주어졌을 때, 종이 조각으로 만들 수 있는 소수가 몇 개인지 return 하도록 solution 함수를 완성해주세요. 입출력 예 | n | result | | — | — | | “17” | 3 | | “011” | 2 | 문제풀이전체 순열 조합을 구하고, 그 중 primeNumber를 걸러낸다. 그 개수가 정답. 1234567891011121314151617181920212223242526272829303132333435363738function solution(numbers) {  const numberList = numbers. split('');  const findPrimeNumbers = (stringList, prevNumber) =&gt; {    const caliPrevNumber = prevNumber || '';    return stringList. reduce((list, value, idx) =&gt; {      if (isPrimeNumber(Number(caliPrevNumber + value))) {        list. push(Number(caliPrevNumber + value));      }      const nextList = [. . . stringList];      nextList. splice(idx, 1);      const result = findPrimeNumbers(      nextList,      caliPrevNumber + value,      );      list. push(. . . result);      return list;    }, []);  }  const answers = findPrimeNumbers(numberList);  return [. . . new Set(answers)]. length; //중복값 제거. }function isPrimeNumber(number) {  const notPrime = [0, 1];  if (notPrime. includes(number)) return false;  for (let i = 2; i * i &lt;= number; i++) {    if (number % i === 0) return false;  }  return true;}"
    }, {
    "id": 23,
    "url": "/Malgeon/study_CODE_hash_1-copy-7/",
    "title": "해시 : 완주하지 못한 선수",
    "body": "2020/07/17 - 문제 설명22한자리 숫자가 적힌 종이 조각이 흩어져있습니다. 흩어진 종이 조각을 붙여 소수를 몇 개 만들 수 있는지 알아내려 합니다. 각 종이 조각에 적힌 숫자가 적힌 문자열 numbers가 주어졌을 때, 종이 조각으로 만들 수 있는 소수가 몇 개인지 return 하도록 solution 함수를 완성해주세요. 입출력 예 | n | result | | — | — | | “17” | 3 | | “011” | 2 | 문제풀이전체 순열 조합을 구하고, 그 중 primeNumber를 걸러낸다. 그 개수가 정답. 1234567891011121314151617181920212223242526272829303132333435363738function solution(numbers) {  const numberList = numbers. split('');  const findPrimeNumbers = (stringList, prevNumber) =&gt; {    const caliPrevNumber = prevNumber || '';    return stringList. reduce((list, value, idx) =&gt; {      if (isPrimeNumber(Number(caliPrevNumber + value))) {        list. push(Number(caliPrevNumber + value));      }      const nextList = [. . . stringList];      nextList. splice(idx, 1);      const result = findPrimeNumbers(      nextList,      caliPrevNumber + value,      );      list. push(. . . result);      return list;    }, []);  }  const answers = findPrimeNumbers(numberList);  return [. . . new Set(answers)]. length; //중복값 제거. }function isPrimeNumber(number) {  const notPrime = [0, 1];  if (notPrime. includes(number)) return false;  for (let i = 2; i * i &lt;= number; i++) {    if (number % i === 0) return false;  }  return true;}"
    }, {
    "id": 24,
    "url": "/Malgeon/study_CODE_hash_1-copy-6/",
    "title": "해시 : 완주하지 못한 선수",
    "body": "2020/07/17 - 문제 설명22한자리 숫자가 적힌 종이 조각이 흩어져있습니다. 흩어진 종이 조각을 붙여 소수를 몇 개 만들 수 있는지 알아내려 합니다. 각 종이 조각에 적힌 숫자가 적힌 문자열 numbers가 주어졌을 때, 종이 조각으로 만들 수 있는 소수가 몇 개인지 return 하도록 solution 함수를 완성해주세요. 입출력 예 | n | result | | — | — | | “17” | 3 | | “011” | 2 | 문제풀이전체 순열 조합을 구하고, 그 중 primeNumber를 걸러낸다. 그 개수가 정답. 1234567891011121314151617181920212223242526272829303132333435363738function solution(numbers) {  const numberList = numbers. split('');  const findPrimeNumbers = (stringList, prevNumber) =&gt; {    const caliPrevNumber = prevNumber || '';    return stringList. reduce((list, value, idx) =&gt; {      if (isPrimeNumber(Number(caliPrevNumber + value))) {        list. push(Number(caliPrevNumber + value));      }      const nextList = [. . . stringList];      nextList. splice(idx, 1);      const result = findPrimeNumbers(      nextList,      caliPrevNumber + value,      );      list. push(. . . result);      return list;    }, []);  }  const answers = findPrimeNumbers(numberList);  return [. . . new Set(answers)]. length; //중복값 제거. }function isPrimeNumber(number) {  const notPrime = [0, 1];  if (notPrime. includes(number)) return false;  for (let i = 2; i * i &lt;= number; i++) {    if (number % i === 0) return false;  }  return true;}"
    }, {
    "id": 25,
    "url": "/Malgeon/study_CODE_hash_1-copy-5/",
    "title": "해시 : 완주하지 못한 선수",
    "body": "2020/07/17 - 문제 설명22한자리 숫자가 적힌 종이 조각이 흩어져있습니다. 흩어진 종이 조각을 붙여 소수를 몇 개 만들 수 있는지 알아내려 합니다. 각 종이 조각에 적힌 숫자가 적힌 문자열 numbers가 주어졌을 때, 종이 조각으로 만들 수 있는 소수가 몇 개인지 return 하도록 solution 함수를 완성해주세요. 입출력 예       n   result         “17”   3       “011”   2   문제풀이전체 순열 조합을 구하고, 그 중 primeNumber를 걸러낸다. 그 개수가 정답. 1234567891011121314151617181920212223242526272829303132333435363738function solution(numbers) {  const numberList = numbers. split('');  const findPrimeNumbers = (stringList, prevNumber) =&gt; {    const caliPrevNumber = prevNumber || '';    return stringList. reduce((list, value, idx) =&gt; {      if (isPrimeNumber(Number(caliPrevNumber + value))) {        list. push(Number(caliPrevNumber + value));      }      const nextList = [. . . stringList];      nextList. splice(idx, 1);      const result = findPrimeNumbers(      nextList,      caliPrevNumber + value,      );      list. push(. . . result);      return list;    }, []);  }  const answers = findPrimeNumbers(numberList);  return [. . . new Set(answers)]. length; //중복값 제거. }function isPrimeNumber(number) {  const notPrime = [0, 1];  if (notPrime. includes(number)) return false;  for (let i = 2; i * i &lt;= number; i++) {    if (number % i === 0) return false;  }  return true;}"
    }, {
    "id": 26,
    "url": "/Malgeon/study_CODE_hash_1-copy-4/",
    "title": "해시 : 완주하지 못한 선수",
    "body": "2020/07/17 - 문제 설명22한자리 숫자가 적힌 종이 조각이 흩어져있습니다. 흩어진 종이 조각을 붙여 소수를 몇 개 만들 수 있는지 알아내려 합니다. 각 종이 조각에 적힌 숫자가 적힌 문자열 numbers가 주어졌을 때, 종이 조각으로 만들 수 있는 소수가 몇 개인지 return 하도록 solution 함수를 완성해주세요. 입출력 예 | n | result | | — | — | | “17” | 3 | | “011” | 2 | 문제풀이전체 순열 조합을 구하고, 그 중 primeNumber를 걸러낸다. 그 개수가 정답. 1234567891011121314151617181920212223242526272829303132333435363738function solution(numbers) {  const numberList = numbers. split('');  const findPrimeNumbers = (stringList, prevNumber) =&gt; {    const caliPrevNumber = prevNumber || '';    return stringList. reduce((list, value, idx) =&gt; {      if (isPrimeNumber(Number(caliPrevNumber + value))) {        list. push(Number(caliPrevNumber + value));      }      const nextList = [. . . stringList];      nextList. splice(idx, 1);      const result = findPrimeNumbers(      nextList,      caliPrevNumber + value,      );      list. push(. . . result);      return list;    }, []);  }  const answers = findPrimeNumbers(numberList);  return [. . . new Set(answers)]. length; //중복값 제거. }function isPrimeNumber(number) {  const notPrime = [0, 1];  if (notPrime. includes(number)) return false;  for (let i = 2; i * i &lt;= number; i++) {    if (number % i === 0) return false;  }  return true;}"
    }, {
    "id": 27,
    "url": "/Malgeon/study_CODE_hash_1-copy-3/",
    "title": "해시 : 완주하지 못한 선수",
    "body": "2020/07/17 - 문제 설명22한자리 숫자가 적힌 종이 조각이 흩어져있습니다. 흩어진 종이 조각을 붙여 소수를 몇 개 만들 수 있는지 알아내려 합니다. 각 종이 조각에 적힌 숫자가 적힌 문자열 numbers가 주어졌을 때, 종이 조각으로 만들 수 있는 소수가 몇 개인지 return 하도록 solution 함수를 완성해주세요. 입출력 예 | n | result | | — | — | | “17” | 3 | | “011” | 2 | 문제풀이전체 순열 조합을 구하고, 그 중 primeNumber를 걸러낸다. 그 개수가 정답. 1234567891011121314151617181920212223242526272829303132333435363738function solution(numbers) {  const numberList = numbers. split('');  const findPrimeNumbers = (stringList, prevNumber) =&gt; {    const caliPrevNumber = prevNumber || '';    return stringList. reduce((list, value, idx) =&gt; {      if (isPrimeNumber(Number(caliPrevNumber + value))) {        list. push(Number(caliPrevNumber + value));      }      const nextList = [. . . stringList];      nextList. splice(idx, 1);      const result = findPrimeNumbers(      nextList,      caliPrevNumber + value,      );      list. push(. . . result);      return list;    }, []);  }  const answers = findPrimeNumbers(numberList);  return [. . . new Set(answers)]. length; //중복값 제거. }function isPrimeNumber(number) {  const notPrime = [0, 1];  if (notPrime. includes(number)) return false;  for (let i = 2; i * i &lt;= number; i++) {    if (number % i === 0) return false;  }  return true;}"
    }, {
    "id": 28,
    "url": "/Malgeon/study_CODE_hash_1-copy-2/",
    "title": "해시 : 완주하지 못한 선수",
    "body": "2020/07/17 - 문제 설명22한1233자리 숫자가 적힌 종이 조각이 흩어져있습니다. 흩어진 종이 조각을 붙여 소수를 몇 개 만들 수 있는지 알아내려 합니다. 각 종이 조각에 적힌 숫자가 적힌 문자열 numbers가 주어졌을 때, 종이 조각으로 만들 수 있는 소수가 몇 개인지 return 하도록 solution 함수를 완성해주세요. 입출력 예 | n | result | | — | — | | “17” | 3 | | “011” | 2 | 문제풀이전체 순열 조합을 구하고, 그 중 primeNumber를 걸러낸다. 그 개수가 정답. 1234567891011121314151617181920212223242526272829303132333435363738function solution(numbers) {  const numberList = numbers. split('');  const findPrimeNumbers = (stringList, prevNumber) =&gt; {    const caliPrevNumber = prevNumber || '';    return stringList. reduce((list, value, idx) =&gt; {      if (isPrimeNumber(Number(caliPrevNumber + value))) {        list. push(Number(caliPrevNumber + value));      }      const nextList = [. . . stringList];      nextList. splice(idx, 1);      const result = findPrimeNumbers(      nextList,      caliPrevNumber + value,      );      list. push(. . . result);      return list;    }, []);  }  const answers = findPrimeNumbers(numberList);  return [. . . new Set(answers)]. length; //중복값 제거. }function isPrimeNumber(number) {  const notPrime = [0, 1];  if (notPrime. includes(number)) return false;  for (let i = 2; i * i &lt;= number; i++) {    if (number % i === 0) return false;  }  return true;}"
    }, {
    "id": 29,
    "url": "/Malgeon/study_CODE_hash_1-copy-2/",
    "title": "해시 : 완주하지 못한 선수",
    "body": "2020/07/14 - 문제 설명1zz1한자리 숫자가 적힌 종이 조각이 흩어져있습니다. 흩어진 종이 조각을 붙여 소수를 몇 개 만들 수 있는지 알아내려 합니다. 각 종이 조각에 적힌 숫자가 적힌 문자열 numbers가 주어졌을 때, 종이 조각으로 만들 수 있는 소수가 몇 개인지 return 하도록 solution 함수를 완성해주세요. 입출력 예       n   result         “17”   3       “011”   2   문제풀이11전체 순열 조합을 구하고, 그 중 primeNumber를 걸러낸다. 그 개수가 정답. 1234567891011121314151617181920212223242526272829303132333435363738function solution(numbers) {  const numberList = numbers. split('');  const findPrimeNumbers = (stringList, prevNumber) =&gt; {    const caliPrevNumber = prevNumber || '';    return stringList. reduce((list, value, idx) =&gt; {      if (isPrimeNumber(Number(caliPrevNumber + value))) {        list. push(Number(caliPrevNumber + value));      }      const nextList = [. . . stringList];      nextList. splice(idx, 1);      const result = findPrimeNumbers(      nextList,      caliPrevNumber + value,      );      list. push(. . . result);      return list;    }, []);  }  const answers = findPrimeNumbers(numberList);  return [. . . new Set(answers)]. length; //중복값 제거. }function isPrimeNumber(number) {  const notPrime = [0, 1];  if (notPrime. includes(number)) return false;  for (let i = 2; i * i &lt;= number; i++) {    if (number % i === 0) return false;  }  return true;}"
    }, {
    "id": 30,
    "url": "/Malgeon/powerful-things-markdown-editor/",
    "title": "Powerful things you can do with the Markdown editor",
    "body": "2018/06/12 - There are lots of powerful things you can do with the Markdown editor. If you’ve gotten pretty comfortable with writing in Markdown, then you may enjoy some more advanced tips about the types of things you can do with Markdown! As with the last post about the editor, you’ll want to be actually editing this post as you read it so that you can see all the Markdown code we’re using. Special formatting: As well as bold and italics, you can also use some other special formatting in Markdown when the need arises, for example:  strike through ==highlight== *escaped characters*Writing code blocks: There are two types of code elements which can be inserted in Markdown, the first is inline, and the other is block. Inline code is formatted by wrapping any word or words in back-ticks, like this. Larger snippets of code can be displayed across multiple lines using triple back ticks: 123. my-link {  text-decoration: underline;}HTML: 12345&lt;li class= ml-1 mr-1 &gt;  &lt;a target= _blank  href= # &gt;  &lt;i class= fab fa-twitter &gt;&lt;/i&gt;  &lt;/a&gt;&lt;/li&gt;CSS: 12345678. highlight . c {  color: #999988;  font-style: italic; }. highlight . err {  color: #a61717;  background-color: #e3d2d2; }JS: 123456789// alertbar later$(document). scroll(function () {  var y = $(this). scrollTop();  if (y &gt; 280) {    $('. alertbar'). fadeIn();  } else {    $('. alertbar'). fadeOut();  }});Python: 1print( Hello World )Ruby: 123require 'redcarpet'markdown = Redcarpet. new( Hello World! )puts markdown. to_htmlC: 1printf( Hello World ); Reference lists: The quick brown jumped over the lazy. Another way to insert links in markdown is using reference lists. You might want to use this style of linking to cite reference material in a Wikipedia-style. All of the links are listed at the end of the document, so you can maintain full separation between content and its source or reference. Full HTML: Perhaps the best part of Markdown is that you’re never limited to just Markdown. You can write HTML directly in the Markdown editor and it will just work as HTML usually does. No limits! Here’s a standard YouTube embed code as an example: "
    }, {
    "id": 31,
    "url": "/Malgeon/first-mass-produced/",
    "title": "The first mass-produced book to deviate from a rectilinear format",
    "body": "2018/06/12 - The first mass-produced book to deviate from a rectilinear format, at least in the United States, is thought to be this 1863 edition of Red Riding Hood, cut into the shape of the protagonist herself with the troublesome wolf curled at her feet. Produced by the Boston-based publisher Louis Prang, this is the first in their “Doll Series”, a set of five “die-cut” books, known also as shape books — the other titles being Robinson Crusoe, Goody Two-Shoes (also written by Red Riding Hood author Lydia Very), Cinderella, and King Winter. An 1868 Prang catalogue would later claim that such “books in the shape of a regular paper Doll… originated with us”.  It would seem the claim could also extend to die cut books in general, as we can’t find anything sooner, but do let us know in the comments if you have further light to shed on this! Such books are, of course, still popular in children’s publishing today, though the die cutting is not now limited to mere outlines, as evidenced in a beautiful 2014 version of the same Little Red Riding Hood story. The die cut has also been employed in the non-juvenile sphere as well, a recent example being Jonathan Safran Foer’s ambitious Tree of Codes. As for this particular rendition of Charles Perrault’s classic tale, the text and design is by Lydia Very (1823-1901), sister of Transcendentalist poet Jones Very. The gruesome ending of the original - which sees Little Red Riding Hood being gobbled up as well as her grandmother - is avoided here, the gore giving way to the less bloody aims of the morality tale, and the lesson that one should not disobey one’s mother. "
    }, {
    "id": 32,
    "url": "/Malgeon/education/",
    "title": "Education must also train one for quick, resolute and effective thinking.",
    "body": "2018/06/12 - There are lots of powerful things you can do with the Markdown editor If you’ve gotten pretty comfortable with writing in Markdown, then you may enjoy some more advanced tips about the types of things you can do with Markdown! As with the last post about the editor, you’ll want to be actually editing this post as you read it so that you can see all the Markdown code we’re using. Special formatting: As well as bold and italics, you can also use some other special formatting in Markdown when the need arises, for example:  strike through ==highlight== *escaped characters*Writing code blocks: There are two types of code elements which can be inserted in Markdown, the first is inline, and the other is block. Inline code is formatted by wrapping any word or words in back-ticks, like this. Larger snippets of code can be displayed across multiple lines using triple back ticks: 123. my-link {  text-decoration: underline;}If you want to get really fancy, you can even add syntax highlighting using Rouge.  Reference lists: The quick brown jumped over the lazy. Another way to insert links in markdown is using reference lists. You might want to use this style of linking to cite reference material in a Wikipedia-style. All of the links are listed at the end of the document, so you can maintain full separation between content and its source or reference. Full HTML: Perhaps the best part of Markdown is that you’re never limited to just Markdown. You can write HTML directly in the Markdown editor and it will just work as HTML usually does. No limits! Here’s a standard YouTube embed code as an example: "
    }, {
    "id": 33,
    "url": "/Malgeon/acumulated-experience/",
    "title": "Accumulated experience of social living",
    "body": "2018/06/12 - The die cut has also been employed in the non-juvenile sphere as well, a recent example being Jonathan Safran Foer’s ambitious Tree of Codes. As for this particular rendition of Charles Perrault’s classic tale, the text and design is by Lydia Very (1823-1901), sister of Transcendentalist poet Jones Very. The gruesome ending of the original - which sees Little Red Riding Hood being gobbled up as well as her grandmother - is avoided here, the gore giving way to the less bloody aims of the morality tale, and the lesson that one should not disobey one’s mother. The first mass-produced book to deviate from a rectilinear format, at least in the United States, is thought to be this 1863 edition of Red Riding Hood, cut into the shape of the protagonist herself with the troublesome wolf curled at her feet. Produced by the Boston-based publisher Louis Prang, this is the first in their “Doll Series”, a set of five “die-cut” books, known also as shape books — the other titles being Robinson Crusoe, Goody Two-Shoes (also written by Red Riding Hood author Lydia Very), Cinderella, and King Winter. An 1868 Prang catalogue would later claim that such “books in the shape of a regular paper Doll… originated with us”.  It would seem the claim could also extend to die cut books in general, as we can’t find anything sooner, but do let us know in the comments if you have further light to shed on this! Such books are, of course, still popular in children’s publishing today, though the die cutting is not now limited to mere outlines, as evidenced in a beautiful 2014 version of the same Little Red Riding Hood story. "
    }, {
    "id": 34,
    "url": "/Malgeon/about-bundler/",
    "title": "About Bundler",
    "body": "2018/05/12 - gem install bundler installs the bundler gem through RubyGems. You only need to install it once - not every time you create a new Jekyll project. Here are some additional details: bundler is a gem that manages other Ruby gems. It makes sure your gems and gem versions are compatible, and that you have all necessary dependencies each gem requires. The Gemfile and Gemfile. lock files inform Bundler about the gem requirements in your site. If your site doesn’t have these Gemfiles, you can omit bundle exec and just run jekyll serve. When you run bundle exec jekyll serve, Bundler uses the gems and versions as specified in Gemfile. lock to ensure your Jekyll site builds with no compatibility or dependency conflicts. For more information about how to use Bundler in your Jekyll project, this tutorial should provide answers to the most common questions and explain how to get up and running quickly. "
    }, {
    "id": 35,
    "url": "/Malgeon/we-all-wait-for-summer/",
    "title": "We all wait for summer",
    "body": "2018/01/12 - As I engage in the so-called “bull sessions” around and about the school, I too often find that most college men have a misconception of the purpose of education. Most of the “brethren” think that education should equip them with the proper instruments of exploitation so that they can forever trample over the masses. Still others think that education should furnish them with noble ends rather than means to an end. It seems to me that education has a two-fold function to perform in the life of man and in society: the one is utility and the other is culture. Education must enable a man to become more efficient, to achieve with increasing facility the ligitimate goals of his life. "
    }, {
    "id": 36,
    "url": "/Malgeon/tree-of-codes/",
    "title": "Tree of Codes",
    "body": "2018/01/12 - The first mass-produced book to deviate from a rectilinear format, at least in the United States, is thought to be this 1863 edition of Red Riding Hood, cut into the shape of the protagonist herself with the troublesome wolf curled at her feet. Produced by the Boston-based publisher Louis Prang, this is the first in their “Doll Series”, a set of five “die-cut” books, known also as shape books — the other titles being Robinson Crusoe, Goody Two-Shoes (also written by Red Riding Hood author Lydia Very), Cinderella, and King Winter. As for this particular rendition of Charles Perrault’s classic tale, the text and design is by Lydia Very (1823-1901), sister of Transcendentalist poet Jones Very. The gruesome ending of the original — which sees Little Red Riding Hood being gobbled up as well as her grandmother — is avoided here, the gore giving way to the less bloody aims of the morality tale, and the lesson that one should not disobey one’s mother.  It would seem the claim could also extend to die cut books in general, as we can’t find anything sooner, but do let us know in the comments if you have further light to shed on this! Such books are, of course, still popular in children’s publishing today, though the die cutting is not now limited to mere outlines, as evidenced in a beautiful 2014 version of the same Little Red Riding Hood story. An 1868 Prang catalogue would later claim that such “books in the shape of a regular paper Doll… originated with us”. The die cut has also been employed in the non-juvenile sphere as well, a recent example being Jonathan Safran Foer’s ambitious Tree of Codes. "
    }, {
    "id": 37,
    "url": "/Malgeon/red-riding/",
    "title": "Red Riding Hood",
    "body": "2018/01/12 - The first mass-produced book to deviate from a rectilinear format, at least in the United States, is thought to be this 1863 edition of Red Riding Hood, cut into the shape of the protagonist herself with the troublesome wolf curled at her feet. Produced by the Boston-based publisher Louis Prang, this is the first in their “Doll Series”, a set of five “die-cut” books, known also as shape books — the other titles being Robinson Crusoe, Goody Two-Shoes (also written by Red Riding Hood author Lydia Very), Cinderella, and King Winter. An 1868 Prang catalogue would later claim that such “books in the shape of a regular paper Doll… originated with us”.  It would seem the claim could also extend to die cut books in general, as we can’t find anything sooner, but do let us know in the comments if you have further light to shed on this! Such books are, of course, still popular in children’s publishing today, though the die cutting is not now limited to mere outlines, as evidenced in a beautiful 2014 version of the same Little Red Riding Hood story. The die cut has also been employed in the non-juvenile sphere as well, a recent example being Jonathan Safran Foer’s ambitious Tree of Codes. As for this particular rendition of Charles Perrault’s classic tale, the text and design is by Lydia Very (1823-1901), sister of Transcendentalist poet Jones Very. The gruesome ending of the original — which sees Little Red Riding Hood being gobbled up as well as her grandmother — is avoided here, the gore giving way to the less bloody aims of the morality tale, and the lesson that one should not disobey one’s mother. "
    }, {
    "id": 38,
    "url": "/Malgeon/press-and-education/",
    "title": "Press and education",
    "body": "2018/01/12 - Even the press, the classroom, the platform, and the pulpit in many instances do not give us objective and unbiased truths. To save man from the morass of propaganda, in my opinion, is one of the chief aims of education. Education must enable one to sift and weigh evidence, to discern the true from the false, the real from the unreal, and the facts from the fiction. Education must also train one for quick, resolute and effective thinking. To think incisively and to think for one’s self is very difficult.  We are prone to let our mental life become invaded by legions of half truths, prejudices, and propaganda. At this point, I often wonder whether or not education is fulfilling its purpose. A great majority of the so-called educated people do not think logically and scientifically. The function of education, therefore, is to teach one to think intensively and to think critically. But education which stops with efficiency may prove the greatest menace to society. The most dangerous criminal may be the man gifted with reason, but with no morals. The late Eugene Talmadge, in my opinion, possessed one of the better minds of Georgia, or even America. Moreover, he wore the Phi Beta Kappa key. By all measuring rods, Mr. Talmadge could think critically and intensively; yet he contends that I am an inferior being. Are those the types of men we call educated? We must remember that intelligence is not enough. Intelligence plus character–that is the goal of true education. The complete education gives one not only power of concentration, but worthy objectives upon which to concentrate. The broad education will, therefore, transmit to one not only the accumulated knowledge of the race but also the accumulated experience of social living. "
    }, {
    "id": 39,
    "url": "/Malgeon/options-for-creating-new-site-with-jekyll/",
    "title": "Options for creating a new site with Jekyll",
    "body": "2018/01/12 - jekyll new &lt;PATH&gt; installs a new Jekyll site at the path specified (relative to current directory). In this case, Jekyll will be installed in a directory called myblog. Here are some additional details:  To install the Jekyll site into the directory you’re currently in, run jekyll new . If the existing directory isn’t empty, you can pass the –force option with jekyll new . –force.  jekyll new automatically initiates bundle install to install the dependencies required. (If you don’t want Bundler to install the gems, use jekyll new myblog --skip-bundle. ) By default, the Jekyll site installed by jekyll new uses a gem-based theme called Minima. With gem-based themes, some of the directories and files are stored in the theme-gem, hidden from your immediate view.  We recommend setting up Jekyll with a gem-based theme but if you want to start with a blank slate, use jekyll new myblog --blank To learn about other parameters you can include with jekyll new, type jekyll new --help. "
    }, {
    "id": 40,
    "url": "/Malgeon/never-stopped-worrying-never-loved-bomb/",
    "title": "Never stopped worrying or loving the bomb",
    "body": "2018/01/12 -  I’ve been through fire and water, I tell you! From my earliest pebblehood the wildest things you could imagine have been happening to this world of ours, and I have been right in the midst of them. So begins Hallam Hawksworth’s The Strange Adventures of a Pebble. Written in the 1920s, the book was part of a series which also included The Adventures of a Grain of Dust and A Year in the Wonderland of Trees, all of which were supposed to introduce children to the world of Natural Sciences. In each of them, Hawksworth personifies the natural object he is exploring, and using a mixture of folk tales, scientific facts and colloquial, friendly explanations guides the reader through the history of the natural world. It’s a real thrill of a ride, dramatizing the life cycle of supposedly dull things. The Adventures of a Grain of Dust begins even more loudly than Pebble: I don’t want you to think that I’m boasting, but I do believe I’m one of the greatest travellers that ever was; and if anybody, living or dead, has ever gone through with more than I have I’d like to hear about it. Hallam Hawksworth was the pen-name of teacher Francis Blake Atkinson. He was married to the author Eleanor Stackhouse Atkinson, author of the children’s classic Greyfriars Bobby, which was based on the (supposedly) true story of a Scottish dog who spent fourteen years guarding his masters grave. The couple were both committed to education and published a weekly magazine for Chicago high school students called The Little Chronicle, as well as working for Encyclopaedia companies later in life. "
    }, {
    "id": 41,
    "url": "/Malgeon/is-intelligence-enough/",
    "title": "External Featured Image",
    "body": "2018/01/12 - Education must also train one for quick, resolute and effective thinking. To think incisively and to think for one’s self is very difficult.  We are prone to let our mental life become invaded by legions of half truths, prejudices, and propaganda. At this point, I often wonder whether or not education is fulfilling its purpose. A great majority of the so-called educated people do not think logically and scientifically. Even the press, the classroom, the platform, and the pulpit in many instances do not give us objective and unbiased truths. To save man from the morass of propaganda, in my opinion, is one of the chief aims of education. Education must enable one to sift and weigh evidence, to discern the true from the false, the real from the unreal, and the facts from the fiction. The function of education, therefore, is to teach one to think intensively and to think critically. But education which stops with efficiency may prove the greatest menace to society. The most dangerous criminal may be the man gifted with reason, but with no morals. The late Eugene Talmadge, in my opinion, possessed one of the better minds of Georgia, or even America. Moreover, he wore the Phi Beta Kappa key. By all measuring rods, Mr. Talmadge could think critically and intensively; yet he contends that I am an inferior being. Are those the types of men we call educated? We must remember that intelligence is not enough. Intelligence plus character–that is the goal of true education. The complete education gives one not only power of concentration, but worthy objectives upon which to concentrate. The broad education will, therefore, transmit to one not only the accumulated knowledge of the race but also the accumulated experience of social living. "
    }, {
    "id": 42,
    "url": "/Malgeon/quick-start-guide1233/",
    "title": "Let's test spoilers",
    "body": "2018/01/11 - Director Roland Suso Richter’s enigmatic psychological thriller (direct to video/DVD) was based upon screenwriter Michael Cooney’s own play “Point of Death” - a title that gave away the film’s entire plot twist premise. As in many similar films, such as Jacob’s Ladder (1990), Soul Survivors (2001), and The Butterfly Effect (2004), events and people were thoroughly distorted and confused because the protagonist was at the point of death. The tagline was misleading: “When You Don’t Have a Memory, How Can You Remember Who to Trust?” The mind-warping film opened with a hospital patient Simon Cable (Ryan Phillippe) awakening in a hospital with little knowledge (amnesia perhaps?) of what had happened, and why he was there, etc. He was told by attending Dr. Jeremy Newman (Stephen Rea) that it was July 29, 2002 (Simon thought it was the year 2000 - he was confused - he heard a doctor say 20:00 hours!) and that he had died for two minutes from cardiac arrest following the near-fatal accident – but he had been revived (“You’re as good as new”). Dr. Newman: “Simon, this is the 29th of July. The year is 2002. And your wife, whose name is Anna, is waiting outside. ” (The doctor left off four crucial additional words, revealed in the film’s ending. ) (Spoiler: Simon had died and was not resuscitated!). A major clue to everything that truly happened was the scene that played next under the credits - hospital staff failed to bring a patient back to life with a defibrillator after a car accident. Chest compressions failed and there was no pulse. A second major clue was provided by hospital orderly Travis (Stephen Graham): Everybody dies. No mystery there. But why and how everyone dies. Now, there's a mystery worth solving. Probably the biggest mystery there is. So how do we do spoilers?: 1&lt;span class= spoiler &gt;My hidden paragraph here. &lt;/span&gt;"
    }, {
    "id": 43,
    "url": "/Malgeon/quick-start-guide/",
    "title": "Let's test spoilers",
    "body": "2018/01/11 - Director Roland Suso Richter’s enigmatic psychological thriller (direct to video/DVD) was based upon screenwriter Michael Cooney’s own play “Point of Death” - a title that gave away the film’s entire plot twist premise. As in many similar films, such as Jacob’s Ladder (1990), Soul Survivors (2001), and The Butterfly Effect (2004), events and people were thoroughly distorted and confused because the protagonist was at the point of death. The tagline was misleading: “When You Don’t Have a Memory, How Can You Remember Who to Trust?” The mind-warping film opened with a hospital patient Simon Cable (Ryan Phillippe) awakening in a hospital with little knowledge (amnesia perhaps?) of what had happened, and why he was there, etc. He was told by attending Dr. Jeremy Newman (Stephen Rea) that it was July 29, 2002 (Simon thought it was the year 2000 - he was confused - he heard a doctor say 20:00 hours!) and that he had died for two minutes from cardiac arrest following the near-fatal accident – but he had been revived (“You’re as good as new”). Dr. Newman: “Simon, this is the 29th of July. The year is 2002. And your wife, whose name is Anna, is waiting outside. ” (The doctor left off four crucial additional words, revealed in the film’s ending. ) (Spoiler: Simon had died and was not resuscitated!). A major clue to everything that truly happened was the scene that played next under the credits - hospital staff failed to bring a patient back to life with a defibrillator after a car accident. Chest compressions failed and there was no pulse. A second major clue was provided by hospital orderly Travis (Stephen Graham): Everybody dies. No mystery there. But why and how everyone dies. Now, there’s a mystery worth solving. Probably the biggest mystery there is. So how do we do spoilers?: 1&lt;span class= spoiler &gt;My hidden paragraph here. &lt;/span&gt;"
    }, {
    "id": 44,
    "url": "/Malgeon/customer-service-copy/",
    "title": "Inception Movie",
    "body": "2018/01/11 - Graph [DFS, BFS]자바 스크립트를 이용한 개념 구현 Graph: 위와 같은 Graph를 구현해 보자.       Vertex   Edge         8   [[1, 2], [1, 3], [2, 4], [2, 5], [3, 6], [3, 7], [4, 8], [5, 8], [6, 8], [7, 8]]    Vertex는 1부터 n까지 이며, Weight가 없는 경우1234567 var edge = [[1, 2], [1, 3], [2, 4], [2, 5], [3, 6], [3, 7], [4, 8], [5, 8], [6, 8], [7, 8]]; var v = 8; const arr = Array(v+1). fill(null). map(() =&gt; Array()); for(let i of edge) {  arr[i[0]]. push(i[1]);  arr[i[1]]. push(i[0]); } Vertex, Edge, Weight 전체 관리123456789101112131415class UndirectGraph { edge = {}; addVertex(vertex) {  this. edge[vertex] = {}; } addEdge(vertex1, vertex2, weight) {  this. edge[vertex1][vertex2] = weight;  this. edge[vertex2][vertex1] = weight; }}const graph = new UndirectGraph();graph. addVertex(1);graph. addVertex(2);graph. addEdge(1, 2, 5);그래프를 구현하였으니 이제 DFS와 BFS를 이용해 탐색을 해보자. DFS:  노드를 설정한 방향대로 끝까지 간 뒤 가장 최근으로 backtacking을 진행하여 해당 방향 끝까지 보내며 전체 탐색을 하는 방법 재귀 호출 방법과 스택을 사용한 방법이 있다. 1→2→4→3→(6)→(8)→7→(8)→(4)→(2)→(1)1→2→4→3→(6)→(8)→7→(8)→(4)→(2)→(1)1→2→4→3→(6)→(8)→7→(8)→(4)→(2)→(1)1→2→4→3→(6)→(8)→7→(8)→(4)→(2)→(1)1→2→4→3→(6)→(8)→7→(8)→(4)→(2)→(1)1→2→4→3→(6)→(8)→7→(8)→(4)→(2)→(1)1→2→4→3→(6)→(8)→7→(8)→(4)→(2)→(1)1→2→4→3→(6)→(8)→7→(8)→(4)→(2)→(1)1→2→4→3→(6)→(8)→7→(8)→(4)→(2)→(1)1→2→4→3→(6)→(8)→7→(8)→(4)→(2)→(1)1→2→4→3→(6)→(8)→7→(8)→(4)→(2)→(1)1→2→4→3→(6)→(8)→7→(8)→(4)→(2)→(1) 재귀1234567891011121314151617const graph = (arr, start) =&gt; {  let visited = new Array(arr. length). fill(false);  const recDFS = (idx) =&gt; {     visited[idx] = true;    console. log(idx +    );    arr[idx]. forEach( i =&gt; {      if(visited[i] == false) {        recDFS(i);      }    })        return;  }  return recDFS(start); // idx start 부터 시작}graph(arr,1); 스택12345678910111213141516171819202122232425262728293031323334353637383940414243444546const graph = (arr, start) =&gt; {    class Stack {    constructor() {     this. _arr = [];    }    push(item) {     this. _arr. push(item);    }    pop() {     return this. _arr. pop();    }    peek() {     return this. _arr[this. _arr. length - 1];    }  }  const stack = new Stack();  let visited = new Array(arr. length). fill(false);  const recDFS = (idx) =&gt; {     stack. push(idx);    let flag;    visited[idx] = true;    console. log(idx);    let value = stack. peek();    while(!(value === undefined)) {      flag = false;      for( i of arr[value]) {        if(visited[i] === false) {          stack. push(i);          console. log(i);          visited[i] = true;          flag = true;          break;        }      }      if(!flag) {        stack. pop();      }      value = stack. peek();    }    return;  }  return recDFS(start); // idx start 부터 시작}BFS:  한 노드에 연결된 노드를 전체 탐색한 뒤 설정한 방향대로 차례로 진행하며 전체를 탐색 하는 방법 큐를 사용한다. 1→(1)→2→3→(2)→4→5→(3)→6→7→(4)→8→(5)→(6)→(7)→(8) 1234567891011121314151617181920212223242526272829303132333435363738394041424344const graph = (arr, start) =&gt; {    class Queue {    constructor() {     this. _arr = [];    }    enqueue(item) {     this. _arr. push(item);    }    dequeue() {     return this. _arr. shift();    }    peek() {      return this. _arr[0];    }  }  const queue = new Queue();  let visited = new Array(arr. length). fill(false);  const recBFS = (idx) =&gt; {     queue. enqueue(idx);    let flag;    visited[idx] = true;    console. log(idx);    let value = queue. peek();    while(!(value === undefined)) {      flag = false;      for( i of arr[value]) {        if(visited[i] === false) {          queue. enqueue(i);          console. log(i);          visited[i] = true;          flag = true;        }      }      if(!flag) {        queue. dequeue();      }      value = queue. peek();    }    return;  }  return recBFS(start); // idx start 부터 시작}DFS, BFS의 컨셉을 이용해 문제를 해결해야 하는 것들이 있음을 인지하자. "
    }];

var idx = lunr(function () {
    this.ref('id')
    this.field('title')
    this.field('body')

    documents.forEach(function (doc) {
        this.add(doc)
    }, this)
});
function lunr_search(term) {
    document.getElementById('lunrsearchresults').innerHTML = '<ul></ul>';
    if(term) {
        document.getElementById('lunrsearchresults').innerHTML = "<p>Search results for '" + term + "'</p>" + document.getElementById('lunrsearchresults').innerHTML;
        //put results on the screen.
        var results = idx.search(term);
        if(results.length>0){
            //console.log(idx.search(term));
            //if results
            for (var i = 0; i < results.length; i++) {
                // more statements
                var ref = results[i]['ref'];
                var url = documents[ref]['url'];
                var title = documents[ref]['title'];
                var body = documents[ref]['body'].substring(0,160)+'...';
                document.querySelectorAll('#lunrsearchresults ul')[0].innerHTML = document.querySelectorAll('#lunrsearchresults ul')[0].innerHTML + "<li class='lunrsearchresult'><a href='" + url + "'><span class='title'>" + title + "</span><br /><span class='body'>"+ body +"</span><br /><span class='url'>"+ url +"</span></a></li>";
            }
        } else {
            document.querySelectorAll('#lunrsearchresults ul')[0].innerHTML = "<li class='lunrsearchresult'>No results found...</li>";
        }
    }
    return false;
}

function lunr_search(term) {
    $('#lunrsearchresults').show( 400 );
    $( "body" ).addClass( "modal-open" );
    
    document.getElementById('lunrsearchresults').innerHTML = '<div id="resultsmodal" class="modal fade show d-block"  tabindex="-1" role="dialog" aria-labelledby="resultsmodal"> <div class="modal-dialog shadow-lg" role="document"> <div class="modal-content"> <div class="modal-header" id="modtit"> <button type="button" class="close" id="btnx" data-dismiss="modal" aria-label="Close"> &times; </button> </div> <div class="modal-body"> <ul class="mb-0"> </ul>    </div> <div class="modal-footer"><button id="btnx" type="button" class="btn btn-danger btn-sm" data-dismiss="modal">Close</button></div></div> </div></div>';
    if(term) {
        document.getElementById('modtit').innerHTML = "<h5 class='modal-title'>Search results for '" + term + "'</h5>" + document.getElementById('modtit').innerHTML;
        //put results on the screen.
        var results = idx.search(term);
        if(results.length>0){
            //console.log(idx.search(term));
            //if results
            for (var i = 0; i < results.length; i++) {
                // more statements
                var ref = results[i]['ref'];
                var url = documents[ref]['url'];
                var title = documents[ref]['title'];
                var body = documents[ref]['body'].substring(0,160)+'...';
                document.querySelectorAll('#lunrsearchresults ul')[0].innerHTML = document.querySelectorAll('#lunrsearchresults ul')[0].innerHTML + "<li class='lunrsearchresult'><a href='" + url + "'><span class='title'>" + title + "</span><br /><small><span class='body'>"+ body +"</span><br /><span class='url'>"+ url +"</span></small></a></li>";
            }
        } else {
            document.querySelectorAll('#lunrsearchresults ul')[0].innerHTML = "<li class='lunrsearchresult'>Sorry, no results found. Close & try a different search!</li>";
        }
    }
    return false;
}
    
$(function() {
    $("#lunrsearchresults").on('click', '#btnx', function () {
        $('#lunrsearchresults').hide( 5 );
        $( "body" ).removeClass( "modal-open" );
    });
});