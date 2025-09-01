<p align='center'>
  <img
    src='https://avatars.githubusercontent.com/oyasaiserver?size=96'
    alt='icon'
  />
</p>
<h3 align='center'>platform</h3>

---

### Getting Started

> [!IMPORTANT]
> [WSL](https://learn.microsoft.com/ja-jp/windows/wsl/install) is required for Windows users.

1. Install [`mise`](https://mise.jdx.dev/getting-started.html), and install required tools:

   ```sh
   mise install
   ```

2. Install dependencies:

   ```sh
   npm install
   ```

### Structure

```
.
├── apps        Web apps (e.g. wiki, api, etc.) that are deployed as CF workers
├── infra       Terraform (cdktf) & onprem infra (compose)
├── lib         Shared library code
├── plugins     Server plugins
└── secrets     Secrets as code
```

### How to Contribute

1. Read the [conventional commits](https://www.conventionalcommits.org/ja/v1.0.0/) specification.
2. Create a PR with title that follows the specification.
3. Make sure to `./gradlew spotlessApply`, `npm run format`, and `npm run lint` before committing.
