import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataGithubBranchProtectionRulesConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/data-sources/branch_protection_rules#id DataGithubBranchProtectionRules#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/data-sources/branch_protection_rules#repository DataGithubBranchProtectionRules#repository}
    */
    readonly repository: string;
}
export interface DataGithubBranchProtectionRulesRules {
}
export declare function dataGithubBranchProtectionRulesRulesToTerraform(struct?: DataGithubBranchProtectionRulesRules): any;
export declare function dataGithubBranchProtectionRulesRulesToHclTerraform(struct?: DataGithubBranchProtectionRulesRules): any;
export declare class DataGithubBranchProtectionRulesRulesOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataGithubBranchProtectionRulesRules | undefined;
    set internalValue(value: DataGithubBranchProtectionRulesRules | undefined);
    get pattern(): any;
}
export declare class DataGithubBranchProtectionRulesRulesList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): DataGithubBranchProtectionRulesRulesOutputReference;
}
/**
* Represents a {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/data-sources/branch_protection_rules github_branch_protection_rules}
*/
export declare class DataGithubBranchProtectionRules extends cdktf.TerraformDataSource {
    static readonly tfResourceType = "github_branch_protection_rules";
    /**
    * Generates CDKTF code for importing a DataGithubBranchProtectionRules resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the DataGithubBranchProtectionRules to import
    * @param importFromId The id of the existing DataGithubBranchProtectionRules that should be imported. Refer to the {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/data-sources/branch_protection_rules#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the DataGithubBranchProtectionRules to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): any;
    /**
    * Create a new {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/data-sources/branch_protection_rules github_branch_protection_rules} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataGithubBranchProtectionRulesConfig
    */
    constructor(scope: Construct, id: string, config: DataGithubBranchProtectionRulesConfig);
    private _id?;
    get id(): string;
    set id(value: string);
    resetId(): void;
    get idInput(): string;
    private _repository?;
    get repository(): string;
    set repository(value: string);
    get repositoryInput(): string;
    private _rules;
    get rules(): DataGithubBranchProtectionRulesRulesList;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
