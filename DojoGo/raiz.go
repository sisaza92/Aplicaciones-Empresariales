package main

import (
  "fmt"
  "math"
)

func Sqrt(x float64) float64 {
  var z = x/2
  var cnt = 0
  for i := 0; i < 10; i++ {
    z = z-((z*z)-x)/2*z
    cnt++;
  }
  return z
}

func main() {
  fmt.Println(Sqrt(2))
  fmt.Println(math.Sqrt(2))
}
