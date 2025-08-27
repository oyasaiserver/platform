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
├── apps        Web apps (e.g. wiki)
├── infra       Terraform (cdktf) & onprem infra definition & deployment
├── lib         Shared library code
├── plugins     Server plugins
├── schema      Zod schemas
└── secrets     Secrets as code
```
