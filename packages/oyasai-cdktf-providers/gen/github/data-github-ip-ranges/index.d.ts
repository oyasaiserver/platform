import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataGithubIpRangesConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/data-sources/ip_ranges#id DataGithubIpRanges#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
}
/**
* Represents a {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/data-sources/ip_ranges github_ip_ranges}
*/
export declare class DataGithubIpRanges extends cdktf.TerraformDataSource {
    static readonly tfResourceType = "github_ip_ranges";
    /**
    * Generates CDKTF code for importing a DataGithubIpRanges resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the DataGithubIpRanges to import
    * @param importFromId The id of the existing DataGithubIpRanges that should be imported. Refer to the {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/data-sources/ip_ranges#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the DataGithubIpRanges to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): any;
    /**
    * Create a new {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/data-sources/ip_ranges github_ip_ranges} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataGithubIpRangesConfig = {}
    */
    constructor(scope: Construct, id: string, config?: DataGithubIpRangesConfig);
    get actions(): any;
    get actionsIpv4(): any;
    get actionsIpv6(): any;
    get actionsMacos(): any;
    get actionsMacosIpv4(): any;
    get actionsMacosIpv6(): any;
    get api(): any;
    get apiIpv4(): any;
    get apiIpv6(): any;
    get dependabot(): any;
    get dependabotIpv4(): any;
    get dependabotIpv6(): any;
    get git(): any;
    get gitIpv4(): any;
    get gitIpv6(): any;
    get githubEnterpriseImporter(): any;
    get githubEnterpriseImporterIpv4(): any;
    get githubEnterpriseImporterIpv6(): any;
    get hooks(): any;
    get hooksIpv4(): any;
    get hooksIpv6(): any;
    private _id?;
    get id(): string;
    set id(value: string);
    resetId(): void;
    get idInput(): string;
    get importer(): any;
    get importerIpv4(): any;
    get importerIpv6(): any;
    get packages(): any;
    get packagesIpv4(): any;
    get packagesIpv6(): any;
    get pages(): any;
    get pagesIpv4(): any;
    get pagesIpv6(): any;
    get web(): any;
    get webIpv4(): any;
    get webIpv6(): any;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
