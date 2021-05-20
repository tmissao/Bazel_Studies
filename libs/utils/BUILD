package(default_visibility = ["//visibility:public"])

load("@build_bazel_rules_nodejs//:index.bzl", "js_library")
load("@npm//@bazel/jasmine:index.bzl", "jasmine_node_test")

js_library(
    name = "utils",
    package_name = "@missao/utils",
    srcs = ["index.js"] + glob(["handler/*"], ["handler/*.spec.js"]),
    deps = ["@npm//lodash"]
)

filegroup(
    name = "handler",
    srcs = ["handler/handler.js"],
)

jasmine_node_test(
    name = "test-utils",
    srcs = glob(["handler/*.spec.js"]),
    data = [":handler"],
    deps = ["@npm//jasmine", "@npm//jasmine-spec-reporter"],
    config_file = "//:spec/support/jasmine.json",
)