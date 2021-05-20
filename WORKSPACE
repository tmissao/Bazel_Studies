workspace(
    name = "missao",
    managed_directories = {"@npm": ["node_modules"]},
)

load("@bazel_tools//tools/build_defs/repo:http.bzl", "http_archive")

# ---------------------------- node rules
http_archive(
    name = "build_bazel_rules_nodejs",
    sha256 = "65067dcad93a61deb593be7d3d9a32a4577d09665536d8da536d731da5cd15e2",
    urls = ["https://github.com/bazelbuild/rules_nodejs/releases/download/3.4.2/rules_nodejs-3.4.2.tar.gz"],
)

load("@build_bazel_rules_nodejs//:index.bzl", "node_repositories", "yarn_install")

NODE_VERSION = "14.17.0"
YARN_VERSION = "1.22.10"

node_repositories(
    node_version = NODE_VERSION,
    yarn_version = YARN_VERSION,
    node_urls = ["https://nodejs.org/dist/v{version}/{filename}"],
    yarn_urls = ["https://github.com/yarnpkg/yarn/releases/download/v{version}/{filename}"],
    node_repositories = {
        "%s-darwin_amd64" % NODE_VERSION  : (
            "node-v%s-darwin-x64.tar.gz" % NODE_VERSION, 
            "node-v%s-darwin-x64" % NODE_VERSION,
            "cc143d20f827a9a307ee8c1a9c5c403d3d254690bf9329094cf679064990e456"
        ),
        "%s-linux_amd64" % NODE_VERSION  : (
            "node-v%s-linux-x64.tar.gz" % NODE_VERSION, 
            "node-v%s-linux-x64" % NODE_VERSION,
            "3d06eabc73ec8626337bff370474306eac1c3c21122f677720d154c556ceafaf"
        ),
        "%s-windows_amd64" % NODE_VERSION  : (
            "node-v%s-win-x64.zip" % NODE_VERSION, 
            "node-v%s-win-x64" % NODE_VERSION,
            "6582a7259c433e9f667dcc4ed3e5d68bc514caba2eed40e4626c8b4c7e5ecd5c"
        ),
    },
    yarn_repositories = {
        YARN_VERSION : (
            "yarn-v%s.tar.gz" %  YARN_VERSION,
            "yarn-v%s" %  YARN_VERSION,
            "7e433d4a77e2c79e6a7ae4866782608a8e8bcad3ec6783580577c59538381a6e"
        )
    }
)

yarn_install(
    name = "npm",
    package_json = "//:package.json",
    yarn_lock = "//:yarn.lock",
    frozen_lockfile = False
)

# ----------------------------

# ---------------------------- docker rules

http_archive(
    name = "io_bazel_rules_docker",
    sha256 = "59d5b42ac315e7eadffa944e86e90c2990110a1c8075f1cd145f487e999d22b3",
    strip_prefix = "rules_docker-0.17.0",
    urls = ["https://github.com/bazelbuild/rules_docker/releases/download/v0.17.0/rules_docker-v0.17.0.tar.gz"],
)

load("@io_bazel_rules_docker//toolchains/docker:toolchain.bzl", docker_toolchain_configure="toolchain_configure")

docker_toolchain_configure(
  name = "docker_config",
  client_config="/root/.docker",
)

load("@io_bazel_rules_docker//repositories:repositories.bzl", container_repositories = "repositories")
container_repositories()

load("@io_bazel_rules_docker//repositories:deps.bzl", container_deps = "deps")
container_deps()

# ---------------------------- docker node images
load("@io_bazel_rules_docker//nodejs:image.bzl", _nodejs_image_repos = "repositories")
_nodejs_image_repos()

# ----------------------------