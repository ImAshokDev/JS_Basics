// for statement
for (var me = 0; me < 5; me++) {
  console.log('welcome');
}

// while statement
var i = 0;
while (i < 5) {
  console.log('hello');
  i++;
}

// do-while statement
var one = 0;
do {
  one += 1;
  console.log(one);
} while (one < 5);

// labeled statement
d = 0;

//this is label
firstLoop: while (d < 2) {
  console.log('hey...');
  d++;
}

// break statement
for (i = 0; i < 5; i++) {
  console.log(i);
  if (i == 3) {
    break;
  }
}
// continue statement
var c = 0,
  p = 0;
while (c < 6) {
  c++;
  console.log('C after increment ' + c);
  if (c == 3) {
    console.log('C inside if ' + c);
    continue;
  }
  p += c;
  console.log('P after incrementing c ' + p);
}

//breaking to a label
var a = 0,
  b = 0;
labelCancelLoop: while (true) {
  console.log('outer loops :.. khrist ..: ' + ' Loop ' + a);
  a += 1;
  b = 1;
  while (true) {
    console.log('Inner loops :..yohan..: ' + b);
    b += 1;
    if (b === 5 && a === 5) {
      break labelCancelLoop;
    } else if (b === 7) {
      break;
    }
  }
}

// continuing to a label
var khrist = 0;
var yohan = 10;
checkKhrishandYohan: while (khrist < 5) {
  console.log(khrist);
  khrist += 1;
  checkYohan: while (yohan > 5) {
    console.log(yohan);
    yohan -= 1;
    if (yohan % 2 == 0) {
      continue checkYohan;
    }
    console.log(yohan + ' is odd.');
  }
  console.log('khrist = ' + khrist);
  console.log('yohan = ' + yohan);
}

// for...in statement

function khristYohan(data, dataName) {
  var result = '';
  for (var i in data) {
    result += '\n' + dataName + '.' + i + ' = ' + data[i];
  }
  return result;
}
var data_input = { model: 'Moto G', os: 'Android - Nougat' };
var data_input_name = 'mobile';
console.log(khristYohan(data_input, data_input_name));

// for...of statement
var khrishNumbers = [5, 6, 7, 1];
khrishNumbers.name = 'khrish';

for (var yohan in khrishNumbers) {
  console.log(yohan);
}
for (var yohan of khrishNumbers) {
  console.log(yohan);
}
console.log(khrishNumbers);
