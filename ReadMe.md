# Bazel Studies

## What is Bazel ?
--- 

Bazel is an extensible open-source build and test tool like Make, Maven and Gradle. Supporting multiple languages and builds outputs for multiple platforms. It is built in Python fashion way, however using a language called `Starlark`.

The main advantage of bazel is fast, correct and hermatic builds. In other words, it ensures that a build will have the same result, be reproducible across computers. A hermetic builds means that only the input that is explicit declared will be used, no side effects, no magic dependencies, only a sandboxed execution.

Also with Bazel the builds are analyzable since all inputs and outputs are declared and as result a directed graph are built. Meaning that every single step in the build process is mapped. It is possible to know each step produces a specific file or artifact. It fully understand the build dependencies and just rebuild which really changed (caching).

Thus, builds are `easy to debug`, `fully incremental` and `can be parallelizable` (since bazel knows exactly on dependencies are related).

## Installing
---

```bash
# Adding Basel Repository
sudo apt install apt-transport-https curl gnupg
curl -fsSL https://bazel.build/bazel-release.pub.gpg | gpg --dearmor > bazel.gpg
sudo mv bazel.gpg /etc/apt/trusted.gpg.d/
echo "deb [arch=amd64] https://storage.googleapis.com/bazel-apt stable jdk1.8" | sudo tee /etc/apt/sources.list.d/bazel.list

# Installing
sudo apt update && sudo apt install bazel

# Upgrading to Newer Version
sudo apt update && sudo apt full-upgrade

# Checking
bazel --version

# If Java Builds Are Necessary
sudo apt install openjdk-11-jdk
```

## References
---

- [`Bazel`](https://docs.bazel.build/versions/master/bazel-overview.html)
- [`Bazel Workshop`](https://www.youtube.com/watch?v=Qb3tykleV_g)
- [`Installing Bazel`](https://docs.bazel.build/versions/master/install.html)
