terraform_api_key := env("TF_API_TOKEN")
base_url := "https://app.terraform.io/api/v2"
org_base_url := f"{{base_url}}/organizations/{{org_name}}"

# Headers

auth_header := f"Authorization: Bearer {{terraform_api_key}}"
content_type_header := "Content-Type: application/vnd.api+json"

# Platform-specific constants

org_name := "oyasaiserver"
project_id := "prj-r6Ro1KhgZwLG4sGC"

create_workspace workspace:
    #!/usr/bin/env bash
    set -euo pipefail
    fname="$(mktemp -t create-workspace-{{ workspace }}-XXXXXX.json)"
    trap "rm -f $fname" EXIT
    cat > "$fname" <<EOF
    {
      "data": {
        "attributes": {
          "name": "{{ workspace }}",
          "global-remote-state": true
        },
        "type": "workspaces",
        "relationships": {
          "project": {
            "data": {
              "id": "{{ project_id }}",
               "type": "projects"
            }
          }
        }
      }
    }
    EOF
    curl \
      -v \
      -L \
      -H "{{ auth_header }}" \
      -H "{{ content_type_header }}" \
      -X POST \
      --data-binary "@$fname" \
      "{{ org_base_url }}/workspaces"

delete_workspace workspace:
    curl \
      -v \
      -L \
      --fail \
      -H "{{ auth_header }}" \
      -H "{{ content_type_header }}" \
      -X POST \
      "{{ org_base_url }}/workspaces/{{ workspace }}/actions/safe-delete"
