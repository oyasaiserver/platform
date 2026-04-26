// https://registry.terraform.io/providers/integrations/github/6.12.0/docs/data-sources/ip_ranges
// generated from terraform resource schema
import * as cdktf from 'cdktf';
/**
* Represents a {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/data-sources/ip_ranges github_ip_ranges}
*/
export class DataGithubIpRanges extends cdktf.TerraformDataSource {
    // =================
    // STATIC PROPERTIES
    // =================
    static tfResourceType = "github_ip_ranges";
    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTF code for importing a DataGithubIpRanges resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the DataGithubIpRanges to import
    * @param importFromId The id of the existing DataGithubIpRanges that should be imported. Refer to the {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/data-sources/ip_ranges#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the DataGithubIpRanges to import is found
    */
    static generateConfigForImport(scope, importToId, importFromId, provider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "github_ip_ranges", importId: importFromId, provider });
    }
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/data-sources/ip_ranges github_ip_ranges} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataGithubIpRangesConfig = {}
    */
    constructor(scope, id, config = {}) {
        super(scope, id, {
            terraformResourceType: 'github_ip_ranges',
            terraformGeneratorMetadata: {
                providerName: 'github',
                providerVersion: '6.12.0'
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle,
            provisioners: config.provisioners,
            connection: config.connection,
            forEach: config.forEach
        });
        this._id = config.id;
    }
    // ==========
    // ATTRIBUTES
    // ==========
    // actions - computed: true, optional: false, required: false
    get actions() {
        return this.getListAttribute('actions');
    }
    // actions_ipv4 - computed: true, optional: false, required: false
    get actionsIpv4() {
        return this.getListAttribute('actions_ipv4');
    }
    // actions_ipv6 - computed: true, optional: false, required: false
    get actionsIpv6() {
        return this.getListAttribute('actions_ipv6');
    }
    // actions_macos - computed: true, optional: false, required: false
    get actionsMacos() {
        return this.getListAttribute('actions_macos');
    }
    // actions_macos_ipv4 - computed: true, optional: false, required: false
    get actionsMacosIpv4() {
        return this.getListAttribute('actions_macos_ipv4');
    }
    // actions_macos_ipv6 - computed: true, optional: false, required: false
    get actionsMacosIpv6() {
        return this.getListAttribute('actions_macos_ipv6');
    }
    // api - computed: true, optional: false, required: false
    get api() {
        return this.getListAttribute('api');
    }
    // api_ipv4 - computed: true, optional: false, required: false
    get apiIpv4() {
        return this.getListAttribute('api_ipv4');
    }
    // api_ipv6 - computed: true, optional: false, required: false
    get apiIpv6() {
        return this.getListAttribute('api_ipv6');
    }
    // dependabot - computed: true, optional: false, required: false
    get dependabot() {
        return this.getListAttribute('dependabot');
    }
    // dependabot_ipv4 - computed: true, optional: false, required: false
    get dependabotIpv4() {
        return this.getListAttribute('dependabot_ipv4');
    }
    // dependabot_ipv6 - computed: true, optional: false, required: false
    get dependabotIpv6() {
        return this.getListAttribute('dependabot_ipv6');
    }
    // git - computed: true, optional: false, required: false
    get git() {
        return this.getListAttribute('git');
    }
    // git_ipv4 - computed: true, optional: false, required: false
    get gitIpv4() {
        return this.getListAttribute('git_ipv4');
    }
    // git_ipv6 - computed: true, optional: false, required: false
    get gitIpv6() {
        return this.getListAttribute('git_ipv6');
    }
    // github_enterprise_importer - computed: true, optional: false, required: false
    get githubEnterpriseImporter() {
        return this.getListAttribute('github_enterprise_importer');
    }
    // github_enterprise_importer_ipv4 - computed: true, optional: false, required: false
    get githubEnterpriseImporterIpv4() {
        return this.getListAttribute('github_enterprise_importer_ipv4');
    }
    // github_enterprise_importer_ipv6 - computed: true, optional: false, required: false
    get githubEnterpriseImporterIpv6() {
        return this.getListAttribute('github_enterprise_importer_ipv6');
    }
    // hooks - computed: true, optional: false, required: false
    get hooks() {
        return this.getListAttribute('hooks');
    }
    // hooks_ipv4 - computed: true, optional: false, required: false
    get hooksIpv4() {
        return this.getListAttribute('hooks_ipv4');
    }
    // hooks_ipv6 - computed: true, optional: false, required: false
    get hooksIpv6() {
        return this.getListAttribute('hooks_ipv6');
    }
    // id - computed: true, optional: true, required: false
    _id;
    get id() {
        return this.getStringAttribute('id');
    }
    set id(value) {
        this._id = value;
    }
    resetId() {
        this._id = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get idInput() {
        return this._id;
    }
    // importer - computed: true, optional: false, required: false
    get importer() {
        return this.getListAttribute('importer');
    }
    // importer_ipv4 - computed: true, optional: false, required: false
    get importerIpv4() {
        return this.getListAttribute('importer_ipv4');
    }
    // importer_ipv6 - computed: true, optional: false, required: false
    get importerIpv6() {
        return this.getListAttribute('importer_ipv6');
    }
    // packages - computed: true, optional: false, required: false
    get packages() {
        return this.getListAttribute('packages');
    }
    // packages_ipv4 - computed: true, optional: false, required: false
    get packagesIpv4() {
        return this.getListAttribute('packages_ipv4');
    }
    // packages_ipv6 - computed: true, optional: false, required: false
    get packagesIpv6() {
        return this.getListAttribute('packages_ipv6');
    }
    // pages - computed: true, optional: false, required: false
    get pages() {
        return this.getListAttribute('pages');
    }
    // pages_ipv4 - computed: true, optional: false, required: false
    get pagesIpv4() {
        return this.getListAttribute('pages_ipv4');
    }
    // pages_ipv6 - computed: true, optional: false, required: false
    get pagesIpv6() {
        return this.getListAttribute('pages_ipv6');
    }
    // web - computed: true, optional: false, required: false
    get web() {
        return this.getListAttribute('web');
    }
    // web_ipv4 - computed: true, optional: false, required: false
    get webIpv4() {
        return this.getListAttribute('web_ipv4');
    }
    // web_ipv6 - computed: true, optional: false, required: false
    get webIpv6() {
        return this.getListAttribute('web_ipv6');
    }
    // =========
    // SYNTHESIS
    // =========
    synthesizeAttributes() {
        return {
            id: cdktf.stringToTerraform(this._id),
        };
    }
    synthesizeHclAttributes() {
        const attrs = {
            id: {
                value: cdktf.stringToHclTerraform(this._id),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
        };
        // remove undefined attributes
        return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
    }
}
