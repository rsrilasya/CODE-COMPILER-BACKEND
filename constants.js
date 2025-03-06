// constants.js
const LANGUAGE_VERSIONS = {
    javascript: "18.15.0",
    python: "3.10.0",
    csharp: "6.12.0",
    java: "15.0.2",
    typescript: "5.0.3",
    c: "10.2.0",
    go: "1.16.2",
    kotlin: "1.8.20",
    perl: "5.36.0",
    ruby: "3.0.1",
    cpp: "10.2.0"
  };
  
  const CODE_SNIPPETS = {
    javascript: `function greet(name) {
      console.log("Hello, " + name + "!");
  }
  
  greet("coder!");`,
    python: `def greet(name):
      print("Hello, " + name + "!")
      
  greet("coder!")`,
    csharp: `using System;
  
  class Program
  {
      static void Main(string[] args)
      {
          Console.WriteLine("Hello, coder!");
      }
  }`,
    java: `public class HelloWorld {
      public static void main(String[] args) {
          System.out.println("Hello coder!");
      }
  }`,
    typescript: `function greet(name: string) {
      console.log("Hello, " + name + "!");
  }
  
  greet("coder!");`,
    c: `#include <stdio.h>
  
  int main() {
      printf("Hello, coder!");
      return 0;
  }`,
    go: `package main
  
  import "fmt"
  
  func main() {
      fmt.Println("Hello, coder!")
  }`,
    kotlin: `fun main() {
      println("Hello coder!")
  }`,
    perl: `sub greet {
      my ($name) = @_;
      print "Hello, $name!\n";
  }
  
  greet("coder");`,
    ruby: `def greet(name)
      puts "Hello, #{name}!"
  end
  
  greet("coder")`,
    cpp: `#include <iostream>
  
  int main() {
      std::cout << "Hello, coder!" << std::endl;
      return 0;
  }`
  };
  
  module.exports = { LANGUAGE_VERSIONS, CODE_SNIPPETS };
  