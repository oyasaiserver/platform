import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataInfisicalGroupsConfig extends cdktf.TerraformMetaArguments {
}
export interface DataInfisicalGroupsGroups {
}
export declare function dataInfisicalGroupsGroupsToTerraform(struct?: DataInfisicalGroupsGroups): any;
export declare function dataInfisicalGroupsGroupsToHclTerraform(struct?: DataInfisicalGroupsGroups): any;
export declare class DataInfisicalGroupsGroupsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataInfisicalGroupsGroups | undefined;
    set internalValue(value: DataInfisicalGroupsGroups | undefined);
    get id(): any;
    get name(): any;
    get orgId(): any;
    get role(): any;
    get roleId(): any;
}
export declare class DataInfisicalGroupsGroupsList extends cdktf.ComplexList {
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
    get(index: number): DataInfisicalGroupsGroupsOutputReference;
}
/**
* Represents a {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/data-sources/groups infisical_groups}
*/
export declare class DataInfisicalGroups extends cdktf.TerraformDataSource {
    static readonly tfResourceType = "infisical_groups";
    /**
    * Generates CDKTF code for importing a DataInfisicalGroups resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the DataInfisicalGroups to import
    * @param importFromId The id of the existing DataInfisicalGroups that should be imported. Refer to the {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/data-sources/groups#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the DataInfisicalGroups to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): any;
    /**
    * Create a new {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/data-sources/groups infisical_groups} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataInfisicalGroupsConfig = {}
    */
    constructor(scope: Construct, id: string, config?: DataInfisicalGroupsConfig);
    private _groups;
    get groups(): DataInfisicalGroupsGroupsList;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
