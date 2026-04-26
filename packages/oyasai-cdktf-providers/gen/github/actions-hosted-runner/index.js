// https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/actions_hosted_runner
// generated from terraform resource schema
import * as cdktf from 'cdktf';
export function actionsHostedRunnerMachineSizeDetailsToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
export function actionsHostedRunnerMachineSizeDetailsToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {};
    return attrs;
}
export class ActionsHostedRunnerMachineSizeDetailsOutputReference extends cdktf.ComplexObject {
    isEmptyObject = false;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource, terraformAttribute, complexObjectIndex, complexObjectIsFromSet) {
        super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
    }
    get internalValue() {
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult = {};
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
        }
    }
    // cpu_cores - computed: true, optional: false, required: false
    get cpuCores() {
        return this.getNumberAttribute('cpu_cores');
    }
    // id - computed: true, optional: false, required: false
    get id() {
        return this.getStringAttribute('id');
    }
    // memory_gb - computed: true, optional: false, required: false
    get memoryGb() {
        return this.getNumberAttribute('memory_gb');
    }
    // storage_gb - computed: true, optional: false, required: false
    get storageGb() {
        return this.getNumberAttribute('storage_gb');
    }
}
export class ActionsHostedRunnerMachineSizeDetailsList extends cdktf.ComplexList {
    terraformResource;
    terraformAttribute;
    wrapsSet;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource, terraformAttribute, wrapsSet) {
        super(terraformResource, terraformAttribute, wrapsSet);
        this.terraformResource = terraformResource;
        this.terraformAttribute = terraformAttribute;
        this.wrapsSet = wrapsSet;
    }
    /**
    * @param index the index of the item to return
    */
    get(index) {
        return new ActionsHostedRunnerMachineSizeDetailsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export function actionsHostedRunnerPublicIpsToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
export function actionsHostedRunnerPublicIpsToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {};
    return attrs;
}
export class ActionsHostedRunnerPublicIpsOutputReference extends cdktf.ComplexObject {
    isEmptyObject = false;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource, terraformAttribute, complexObjectIndex, complexObjectIsFromSet) {
        super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
    }
    get internalValue() {
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult = {};
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
        }
    }
    // enabled - computed: true, optional: false, required: false
    get enabled() {
        return this.getBooleanAttribute('enabled');
    }
    // length - computed: true, optional: false, required: false
    get length() {
        return this.getNumberAttribute('length');
    }
    // prefix - computed: true, optional: false, required: false
    get prefix() {
        return this.getStringAttribute('prefix');
    }
}
export class ActionsHostedRunnerPublicIpsList extends cdktf.ComplexList {
    terraformResource;
    terraformAttribute;
    wrapsSet;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource, terraformAttribute, wrapsSet) {
        super(terraformResource, terraformAttribute, wrapsSet);
        this.terraformResource = terraformResource;
        this.terraformAttribute = terraformAttribute;
        this.wrapsSet = wrapsSet;
    }
    /**
    * @param index the index of the item to return
    */
    get(index) {
        return new ActionsHostedRunnerPublicIpsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export function actionsHostedRunnerImageToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        id: cdktf.stringToTerraform(struct.id),
        source: cdktf.stringToTerraform(struct.source),
    };
}
export function actionsHostedRunnerImageToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {
        id: {
            value: cdktf.stringToHclTerraform(struct.id),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        source: {
            value: cdktf.stringToHclTerraform(struct.source),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };
    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}
export class ActionsHostedRunnerImageOutputReference extends cdktf.ComplexObject {
    isEmptyObject = false;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource, terraformAttribute) {
        super(terraformResource, terraformAttribute, false, 0);
    }
    get internalValue() {
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult = {};
        if (this._id !== undefined) {
            hasAnyValues = true;
            internalValueResult.id = this._id;
        }
        if (this._source !== undefined) {
            hasAnyValues = true;
            internalValueResult.source = this._source;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._id = undefined;
            this._source = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._id = value.id;
            this._source = value.source;
        }
    }
    // id - computed: false, optional: false, required: true
    _id;
    get id() {
        return this.getStringAttribute('id');
    }
    set id(value) {
        this._id = value;
    }
    // Temporarily expose input value. Use with caution.
    get idInput() {
        return this._id;
    }
    // size_gb - computed: true, optional: false, required: false
    get sizeGb() {
        return this.getNumberAttribute('size_gb');
    }
    // source - computed: false, optional: true, required: false
    _source;
    get source() {
        return this.getStringAttribute('source');
    }
    set source(value) {
        this._source = value;
    }
    resetSource() {
        this._source = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get sourceInput() {
        return this._source;
    }
}
export function actionsHostedRunnerTimeoutsToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        delete: cdktf.stringToTerraform(struct.delete),
    };
}
export function actionsHostedRunnerTimeoutsToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {
        delete: {
            value: cdktf.stringToHclTerraform(struct.delete),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };
    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}
export class ActionsHostedRunnerTimeoutsOutputReference extends cdktf.ComplexObject {
    isEmptyObject = false;
    resolvableValue;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource, terraformAttribute) {
        super(terraformResource, terraformAttribute, false);
    }
    get internalValue() {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult = {};
        if (this._delete !== undefined) {
            hasAnyValues = true;
            internalValueResult.delete = this._delete;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._delete = undefined;
        }
        else if (cdktf.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._delete = value.delete;
        }
    }
    // delete - computed: false, optional: true, required: false
    _delete;
    get delete() {
        return this.getStringAttribute('delete');
    }
    set delete(value) {
        this._delete = value;
    }
    resetDelete() {
        this._delete = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get deleteInput() {
        return this._delete;
    }
}
/**
* Represents a {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/actions_hosted_runner github_actions_hosted_runner}
*/
export class ActionsHostedRunner extends cdktf.TerraformResource {
    // =================
    // STATIC PROPERTIES
    // =================
    static tfResourceType = "github_actions_hosted_runner";
    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTF code for importing a ActionsHostedRunner resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the ActionsHostedRunner to import
    * @param importFromId The id of the existing ActionsHostedRunner that should be imported. Refer to the {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/actions_hosted_runner#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the ActionsHostedRunner to import is found
    */
    static generateConfigForImport(scope, importToId, importFromId, provider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "github_actions_hosted_runner", importId: importFromId, provider });
    }
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/actions_hosted_runner github_actions_hosted_runner} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options ActionsHostedRunnerConfig
    */
    constructor(scope, id, config) {
        super(scope, id, {
            terraformResourceType: 'github_actions_hosted_runner',
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
        this._imageGen = config.imageGen;
        this._imageVersion = config.imageVersion;
        this._maximumRunners = config.maximumRunners;
        this._name = config.name;
        this._publicIpEnabled = config.publicIpEnabled;
        this._runnerGroupId = config.runnerGroupId;
        this._size = config.size;
        this._image.internalValue = config.image;
        this._timeouts.internalValue = config.timeouts;
    }
    // ==========
    // ATTRIBUTES
    // ==========
    // id - computed: true, optional: false, required: false
    get id() {
        return this.getStringAttribute('id');
    }
    // image_gen - computed: false, optional: true, required: false
    _imageGen;
    get imageGen() {
        return this.getBooleanAttribute('image_gen');
    }
    set imageGen(value) {
        this._imageGen = value;
    }
    resetImageGen() {
        this._imageGen = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get imageGenInput() {
        return this._imageGen;
    }
    // image_version - computed: false, optional: true, required: false
    _imageVersion;
    get imageVersion() {
        return this.getStringAttribute('image_version');
    }
    set imageVersion(value) {
        this._imageVersion = value;
    }
    resetImageVersion() {
        this._imageVersion = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get imageVersionInput() {
        return this._imageVersion;
    }
    // last_active_on - computed: true, optional: false, required: false
    get lastActiveOn() {
        return this.getStringAttribute('last_active_on');
    }
    // machine_size_details - computed: true, optional: false, required: false
    _machineSizeDetails = new ActionsHostedRunnerMachineSizeDetailsList(this, "machine_size_details", false);
    get machineSizeDetails() {
        return this._machineSizeDetails;
    }
    // maximum_runners - computed: true, optional: true, required: false
    _maximumRunners;
    get maximumRunners() {
        return this.getNumberAttribute('maximum_runners');
    }
    set maximumRunners(value) {
        this._maximumRunners = value;
    }
    resetMaximumRunners() {
        this._maximumRunners = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get maximumRunnersInput() {
        return this._maximumRunners;
    }
    // name - computed: false, optional: false, required: true
    _name;
    get name() {
        return this.getStringAttribute('name');
    }
    set name(value) {
        this._name = value;
    }
    // Temporarily expose input value. Use with caution.
    get nameInput() {
        return this._name;
    }
    // platform - computed: true, optional: false, required: false
    get platform() {
        return this.getStringAttribute('platform');
    }
    // public_ip_enabled - computed: false, optional: true, required: false
    _publicIpEnabled;
    get publicIpEnabled() {
        return this.getBooleanAttribute('public_ip_enabled');
    }
    set publicIpEnabled(value) {
        this._publicIpEnabled = value;
    }
    resetPublicIpEnabled() {
        this._publicIpEnabled = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get publicIpEnabledInput() {
        return this._publicIpEnabled;
    }
    // public_ips - computed: true, optional: false, required: false
    _publicIps = new ActionsHostedRunnerPublicIpsList(this, "public_ips", false);
    get publicIps() {
        return this._publicIps;
    }
    // runner_group_id - computed: false, optional: false, required: true
    _runnerGroupId;
    get runnerGroupId() {
        return this.getNumberAttribute('runner_group_id');
    }
    set runnerGroupId(value) {
        this._runnerGroupId = value;
    }
    // Temporarily expose input value. Use with caution.
    get runnerGroupIdInput() {
        return this._runnerGroupId;
    }
    // size - computed: false, optional: false, required: true
    _size;
    get size() {
        return this.getStringAttribute('size');
    }
    set size(value) {
        this._size = value;
    }
    // Temporarily expose input value. Use with caution.
    get sizeInput() {
        return this._size;
    }
    // status - computed: true, optional: false, required: false
    get status() {
        return this.getStringAttribute('status');
    }
    // image - computed: false, optional: false, required: true
    _image = new ActionsHostedRunnerImageOutputReference(this, "image");
    get image() {
        return this._image;
    }
    putImage(value) {
        this._image.internalValue = value;
    }
    // Temporarily expose input value. Use with caution.
    get imageInput() {
        return this._image.internalValue;
    }
    // timeouts - computed: false, optional: true, required: false
    _timeouts = new ActionsHostedRunnerTimeoutsOutputReference(this, "timeouts");
    get timeouts() {
        return this._timeouts;
    }
    putTimeouts(value) {
        this._timeouts.internalValue = value;
    }
    resetTimeouts() {
        this._timeouts.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get timeoutsInput() {
        return this._timeouts.internalValue;
    }
    // =========
    // SYNTHESIS
    // =========
    synthesizeAttributes() {
        return {
            image_gen: cdktf.booleanToTerraform(this._imageGen),
            image_version: cdktf.stringToTerraform(this._imageVersion),
            maximum_runners: cdktf.numberToTerraform(this._maximumRunners),
            name: cdktf.stringToTerraform(this._name),
            public_ip_enabled: cdktf.booleanToTerraform(this._publicIpEnabled),
            runner_group_id: cdktf.numberToTerraform(this._runnerGroupId),
            size: cdktf.stringToTerraform(this._size),
            image: actionsHostedRunnerImageToTerraform(this._image.internalValue),
            timeouts: actionsHostedRunnerTimeoutsToTerraform(this._timeouts.internalValue),
        };
    }
    synthesizeHclAttributes() {
        const attrs = {
            image_gen: {
                value: cdktf.booleanToHclTerraform(this._imageGen),
                isBlock: false,
                type: "simple",
                storageClassType: "boolean",
            },
            image_version: {
                value: cdktf.stringToHclTerraform(this._imageVersion),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            maximum_runners: {
                value: cdktf.numberToHclTerraform(this._maximumRunners),
                isBlock: false,
                type: "simple",
                storageClassType: "number",
            },
            name: {
                value: cdktf.stringToHclTerraform(this._name),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            public_ip_enabled: {
                value: cdktf.booleanToHclTerraform(this._publicIpEnabled),
                isBlock: false,
                type: "simple",
                storageClassType: "boolean",
            },
            runner_group_id: {
                value: cdktf.numberToHclTerraform(this._runnerGroupId),
                isBlock: false,
                type: "simple",
                storageClassType: "number",
            },
            size: {
                value: cdktf.stringToHclTerraform(this._size),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            image: {
                value: actionsHostedRunnerImageToHclTerraform(this._image.internalValue),
                isBlock: true,
                type: "list",
                storageClassType: "ActionsHostedRunnerImageList",
            },
            timeouts: {
                value: actionsHostedRunnerTimeoutsToHclTerraform(this._timeouts.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "ActionsHostedRunnerTimeouts",
            },
        };
        // remove undefined attributes
        return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
    }
}
