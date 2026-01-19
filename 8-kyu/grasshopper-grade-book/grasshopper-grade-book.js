function getGrade (s1, s2, s3) {
  let avg = (s1 + s2 + s3) / 3;
  
  if (avg >= 0 && avg < 60) return 'F';
  if (avg < 70) return 'D';
  if (avg < 80) return 'C';
  if (avg < 90) return 'B';
  if (avg <= 100) return 'A';
}