package(default_visibility = ["//visibility:public"])

load("@build_bazel_rules_nodejs//:index.bzl", "nodejs_binary")
load("@io_bazel_rules_docker//nodejs:image.bzl", "nodejs_image")
load("@io_bazel_rules_docker//container:container.bzl", "container_push")

port = "3000"

filegroup(
    name = "api",
    srcs = glob(["api/*"], [] , 0)
)

nodejs_binary(
    name = "run",
    entry_point = ":app.js",
    data = [
        ":api",
        "//libs/math:math", "//libs/utils:utils", "@npm//express", "@npm//cors", "@npm//cookie-parser", "@npm//body-parser"
    ],
    env = { "name":  "Missão", "port" : port }
)

nodejs_image(
    name = "docker-run",
    binary = ":run",
    port = [port]
)

container_push(
   name = "push-hello-world",
   image = ":docker-run",
   format = "Docker",
   registry = "missao.azurecr.io",
   repository = "missao/bazel-hello-world",
   tag = "test",
)