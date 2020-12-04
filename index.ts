import * as pulumi from "@pulumi/pulumi";
import * as random from "@pulumi/random";

const x = new random.RandomPassword("x", {
  length: 30,
  special: true,
});

export const xVal = x.result;
