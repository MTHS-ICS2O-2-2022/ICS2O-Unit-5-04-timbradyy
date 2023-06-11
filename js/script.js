// Copyright (c) 2020 Mr.Coxall All rights reserved
//
// Created by: Tim Brady
// Created on: May 2023
// This file contains the JS functions for index.html

"use strict"

function myButtonClicked() {
  const userAge = document.getElementById("age").value
  document.getElementById("age").innerHTML = userAge
  const day = document.getElementById("day").value
  document.getElementById("day").innerHTML = day

  if (day == "tuesday" || day == "thursday" || (userAge > "12" && userAge < "21")) {
    document.getElementById("price").innerHTML =
      "You are eligible for discounted pricing."
  } else {
    document.getElementById("price").innerHTML =
      "You are not eligible for discounted pricing."
  }
}
