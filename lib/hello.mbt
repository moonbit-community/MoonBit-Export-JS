pub fn fib(n : Int) -> Int {
  for i = 0, a = 1, b = 1 {
    if i >= n {
      break a
    }
    continue i + 1, b, a + b
  }
}

test "fib" {
  inspect([1, 2, 3, 4, 5].map(fib), ~content="[1, 2, 3, 5, 8]")?
}
