import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataInfisicalProjectsConfig extends cdktf.TerraformMetaArguments {
    /**
    * The slug of the project to fetch
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/data-sources/projects#slug DataInfisicalProjects#slug}
    */
    readonly slug: string;
}
export interface DataInfisicalProjectsEnvironments {
}
export declare function dataInfisicalProjectsEnvironmentsToTerraform(struct?: DataInfisicalProjectsEnvironments): any;
export declare function dataInfisicalProjectsEnvironmentsToHclTerraform(struct?: DataInfisicalProjectsEnvironments): any;
export declare class DataInfisicalProjectsEnvironmentsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectKey the key of this item in the map
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectKey: string);
    get internalValue(): DataInfisicalProjectsEnvironments | undefined;
    set internalValue(value: DataInfisicalProjectsEnvironments | undefined);
    get id(): any;
    get name(): any;
    get slug(): any;
}
export declare class DataInfisicalProjectsEnvironmentsMap extends cdktf.ComplexMap {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    /**
    * @param key the key of the item to return
    */
    get(key: string): DataInfisicalProjectsEnvironmentsOutputReference;
}
/**
* Represents a {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/data-sources/projects infisical_projects}
*/
export declare class DataInfisicalProjects extends cdktf.TerraformDataSource {
    static readonly tfResourceType = "infisical_projects";
    /**
    * Generates CDKTF code for importing a DataInfisicalProjects resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the DataInfisicalProjects to import
    * @param importFromId The id of the existing DataInfisicalProjects that should be imported. Refer to the {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/data-sources/projects#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the DataInfisicalProjects to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): any;
    /**
    * Create a new {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/data-sources/projects infisical_projects} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataInfisicalProjectsConfig
    */
    constructor(scope: Construct, id: string, config: DataInfisicalProjectsConfig);
    get autoCapitalization(): any;
    get createdAt(): any;
    private _environments;
    get environments(): DataInfisicalProjectsEnvironmentsMap;
    get id(): any;
    get name(): any;
    get orgId(): any;
    private _slug?;
    get slug(): string;
    set slug(value: string);
    get slugInput(): string;
    get type(): any;
    get updatedAt(): any;
    get upgradeStatus(): any;
    get version(): any;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
