
package main

import (
  "fmt"
  "math"
)

func Sqrt(x float64) float64 {
	var z = float64(x)
	 for dz := z; dz > 1e-6; {
		zant := z
		z = z - (z*z-x)/(2*z)
		dz = zant -z
	}
return z
}

func main() {
  fmt.Println(Sqrt(2))
  fmt.Println(math.Sqrt(2))

}
