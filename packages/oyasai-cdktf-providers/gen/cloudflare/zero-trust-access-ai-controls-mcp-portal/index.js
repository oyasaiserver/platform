// https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_access_ai_controls_mcp_portal
// generated from terraform resource schema
import * as cdktf from 'cdktf';
export function zeroTrustAccessAiControlsMcpPortalServersUpdatedPromptsToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        alias: cdktf.stringToTerraform(struct.alias),
        description: cdktf.stringToTerraform(struct.description),
        enabled: cdktf.booleanToTerraform(struct.enabled),
        name: cdktf.stringToTerraform(struct.name),
    };
}
export function zeroTrustAccessAiControlsMcpPortalServersUpdatedPromptsToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {
        alias: {
            value: cdktf.stringToHclTerraform(struct.alias),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        description: {
            value: cdktf.stringToHclTerraform(struct.description),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        enabled: {
            value: cdktf.booleanToHclTerraform(struct.enabled),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
        name: {
            value: cdktf.stringToHclTerraform(struct.name),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };
    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}
export class ZeroTrustAccessAiControlsMcpPortalServersUpdatedPromptsOutputReference extends cdktf.ComplexObject {
    isEmptyObject = false;
    resolvableValue;
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
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult = {};
        if (this._alias !== undefined) {
            hasAnyValues = true;
            internalValueResult.alias = this._alias;
        }
        if (this._description !== undefined) {
            hasAnyValues = true;
            internalValueResult.description = this._description;
        }
        if (this._enabled !== undefined) {
            hasAnyValues = true;
            internalValueResult.enabled = this._enabled;
        }
        if (this._name !== undefined) {
            hasAnyValues = true;
            internalValueResult.name = this._name;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._alias = undefined;
            this._description = undefined;
            this._enabled = undefined;
            this._name = undefined;
        }
        else if (cdktf.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._alias = value.alias;
            this._description = value.description;
            this._enabled = value.enabled;
            this._name = value.name;
        }
    }
    // alias - computed: true, optional: true, required: false
    _alias;
    get alias() {
        return this.getStringAttribute('alias');
    }
    set alias(value) {
        this._alias = value;
    }
    resetAlias() {
        this._alias = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get aliasInput() {
        return this._alias;
    }
    // description - computed: true, optional: true, required: false
    _description;
    get description() {
        return this.getStringAttribute('description');
    }
    set description(value) {
        this._description = value;
    }
    resetDescription() {
        this._description = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get descriptionInput() {
        return this._description;
    }
    // enabled - computed: true, optional: true, required: false
    _enabled;
    get enabled() {
        return this.getBooleanAttribute('enabled');
    }
    set enabled(value) {
        this._enabled = value;
    }
    resetEnabled() {
        this._enabled = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get enabledInput() {
        return this._enabled;
    }
    // name - computed: true, optional: false, required: true
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
}
export class ZeroTrustAccessAiControlsMcpPortalServersUpdatedPromptsList extends cdktf.ComplexList {
    terraformResource;
    terraformAttribute;
    wrapsSet;
    internalValue;
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
        return new ZeroTrustAccessAiControlsMcpPortalServersUpdatedPromptsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export function zeroTrustAccessAiControlsMcpPortalServersUpdatedToolsToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        alias: cdktf.stringToTerraform(struct.alias),
        description: cdktf.stringToTerraform(struct.description),
        enabled: cdktf.booleanToTerraform(struct.enabled),
        name: cdktf.stringToTerraform(struct.name),
    };
}
export function zeroTrustAccessAiControlsMcpPortalServersUpdatedToolsToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {
        alias: {
            value: cdktf.stringToHclTerraform(struct.alias),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        description: {
            value: cdktf.stringToHclTerraform(struct.description),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        enabled: {
            value: cdktf.booleanToHclTerraform(struct.enabled),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
        name: {
            value: cdktf.stringToHclTerraform(struct.name),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };
    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}
export class ZeroTrustAccessAiControlsMcpPortalServersUpdatedToolsOutputReference extends cdktf.ComplexObject {
    isEmptyObject = false;
    resolvableValue;
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
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult = {};
        if (this._alias !== undefined) {
            hasAnyValues = true;
            internalValueResult.alias = this._alias;
        }
        if (this._description !== undefined) {
            hasAnyValues = true;
            internalValueResult.description = this._description;
        }
        if (this._enabled !== undefined) {
            hasAnyValues = true;
            internalValueResult.enabled = this._enabled;
        }
        if (this._name !== undefined) {
            hasAnyValues = true;
            internalValueResult.name = this._name;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._alias = undefined;
            this._description = undefined;
            this._enabled = undefined;
            this._name = undefined;
        }
        else if (cdktf.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._alias = value.alias;
            this._description = value.description;
            this._enabled = value.enabled;
            this._name = value.name;
        }
    }
    // alias - computed: true, optional: true, required: false
    _alias;
    get alias() {
        return this.getStringAttribute('alias');
    }
    set alias(value) {
        this._alias = value;
    }
    resetAlias() {
        this._alias = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get aliasInput() {
        return this._alias;
    }
    // description - computed: true, optional: true, required: false
    _description;
    get description() {
        return this.getStringAttribute('description');
    }
    set description(value) {
        this._description = value;
    }
    resetDescription() {
        this._description = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get descriptionInput() {
        return this._description;
    }
    // enabled - computed: true, optional: true, required: false
    _enabled;
    get enabled() {
        return this.getBooleanAttribute('enabled');
    }
    set enabled(value) {
        this._enabled = value;
    }
    resetEnabled() {
        this._enabled = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get enabledInput() {
        return this._enabled;
    }
    // name - computed: true, optional: false, required: true
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
}
export class ZeroTrustAccessAiControlsMcpPortalServersUpdatedToolsList extends cdktf.ComplexList {
    terraformResource;
    terraformAttribute;
    wrapsSet;
    internalValue;
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
        return new ZeroTrustAccessAiControlsMcpPortalServersUpdatedToolsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export function zeroTrustAccessAiControlsMcpPortalServersToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        default_disabled: cdktf.booleanToTerraform(struct.defaultDisabled),
        on_behalf: cdktf.booleanToTerraform(struct.onBehalf),
        server_id: cdktf.stringToTerraform(struct.serverId),
        updated_prompts: cdktf.listMapper(zeroTrustAccessAiControlsMcpPortalServersUpdatedPromptsToTerraform, false)(struct.updatedPrompts),
        updated_tools: cdktf.listMapper(zeroTrustAccessAiControlsMcpPortalServersUpdatedToolsToTerraform, false)(struct.updatedTools),
    };
}
export function zeroTrustAccessAiControlsMcpPortalServersToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {
        default_disabled: {
            value: cdktf.booleanToHclTerraform(struct.defaultDisabled),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
        on_behalf: {
            value: cdktf.booleanToHclTerraform(struct.onBehalf),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
        server_id: {
            value: cdktf.stringToHclTerraform(struct.serverId),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        updated_prompts: {
            value: cdktf.listMapperHcl(zeroTrustAccessAiControlsMcpPortalServersUpdatedPromptsToHclTerraform, false)(struct.updatedPrompts),
            isBlock: true,
            type: "list",
            storageClassType: "ZeroTrustAccessAiControlsMcpPortalServersUpdatedPromptsList",
        },
        updated_tools: {
            value: cdktf.listMapperHcl(zeroTrustAccessAiControlsMcpPortalServersUpdatedToolsToHclTerraform, false)(struct.updatedTools),
            isBlock: true,
            type: "list",
            storageClassType: "ZeroTrustAccessAiControlsMcpPortalServersUpdatedToolsList",
        },
    };
    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}
export class ZeroTrustAccessAiControlsMcpPortalServersOutputReference extends cdktf.ComplexObject {
    isEmptyObject = false;
    resolvableValue;
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
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult = {};
        if (this._defaultDisabled !== undefined) {
            hasAnyValues = true;
            internalValueResult.defaultDisabled = this._defaultDisabled;
        }
        if (this._onBehalf !== undefined) {
            hasAnyValues = true;
            internalValueResult.onBehalf = this._onBehalf;
        }
        if (this._serverId !== undefined) {
            hasAnyValues = true;
            internalValueResult.serverId = this._serverId;
        }
        if (this._updatedPrompts?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.updatedPrompts = this._updatedPrompts?.internalValue;
        }
        if (this._updatedTools?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.updatedTools = this._updatedTools?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._defaultDisabled = undefined;
            this._onBehalf = undefined;
            this._serverId = undefined;
            this._updatedPrompts.internalValue = undefined;
            this._updatedTools.internalValue = undefined;
        }
        else if (cdktf.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._defaultDisabled = value.defaultDisabled;
            this._onBehalf = value.onBehalf;
            this._serverId = value.serverId;
            this._updatedPrompts.internalValue = value.updatedPrompts;
            this._updatedTools.internalValue = value.updatedTools;
        }
    }
    // default_disabled - computed: true, optional: true, required: false
    _defaultDisabled;
    get defaultDisabled() {
        return this.getBooleanAttribute('default_disabled');
    }
    set defaultDisabled(value) {
        this._defaultDisabled = value;
    }
    resetDefaultDisabled() {
        this._defaultDisabled = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get defaultDisabledInput() {
        return this._defaultDisabled;
    }
    // on_behalf - computed: true, optional: true, required: false
    _onBehalf;
    get onBehalf() {
        return this.getBooleanAttribute('on_behalf');
    }
    set onBehalf(value) {
        this._onBehalf = value;
    }
    resetOnBehalf() {
        this._onBehalf = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get onBehalfInput() {
        return this._onBehalf;
    }
    // server_id - computed: true, optional: false, required: true
    _serverId;
    get serverId() {
        return this.getStringAttribute('server_id');
    }
    set serverId(value) {
        this._serverId = value;
    }
    // Temporarily expose input value. Use with caution.
    get serverIdInput() {
        return this._serverId;
    }
    // updated_prompts - computed: true, optional: true, required: false
    _updatedPrompts = new ZeroTrustAccessAiControlsMcpPortalServersUpdatedPromptsList(this, "updated_prompts", false);
    get updatedPrompts() {
        return this._updatedPrompts;
    }
    putUpdatedPrompts(value) {
        this._updatedPrompts.internalValue = value;
    }
    resetUpdatedPrompts() {
        this._updatedPrompts.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get updatedPromptsInput() {
        return this._updatedPrompts.internalValue;
    }
    // updated_tools - computed: true, optional: true, required: false
    _updatedTools = new ZeroTrustAccessAiControlsMcpPortalServersUpdatedToolsList(this, "updated_tools", false);
    get updatedTools() {
        return this._updatedTools;
    }
    putUpdatedTools(value) {
        this._updatedTools.internalValue = value;
    }
    resetUpdatedTools() {
        this._updatedTools.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get updatedToolsInput() {
        return this._updatedTools.internalValue;
    }
}
export class ZeroTrustAccessAiControlsMcpPortalServersList extends cdktf.ComplexList {
    terraformResource;
    terraformAttribute;
    wrapsSet;
    internalValue;
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
        return new ZeroTrustAccessAiControlsMcpPortalServersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_access_ai_controls_mcp_portal cloudflare_zero_trust_access_ai_controls_mcp_portal}
*/
export class ZeroTrustAccessAiControlsMcpPortal extends cdktf.TerraformResource {
    // =================
    // STATIC PROPERTIES
    // =================
    static tfResourceType = "cloudflare_zero_trust_access_ai_controls_mcp_portal";
    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTF code for importing a ZeroTrustAccessAiControlsMcpPortal resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the ZeroTrustAccessAiControlsMcpPortal to import
    * @param importFromId The id of the existing ZeroTrustAccessAiControlsMcpPortal that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_access_ai_controls_mcp_portal#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the ZeroTrustAccessAiControlsMcpPortal to import is found
    */
    static generateConfigForImport(scope, importToId, importFromId, provider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "cloudflare_zero_trust_access_ai_controls_mcp_portal", importId: importFromId, provider });
    }
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_access_ai_controls_mcp_portal cloudflare_zero_trust_access_ai_controls_mcp_portal} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options ZeroTrustAccessAiControlsMcpPortalConfig
    */
    constructor(scope, id, config) {
        super(scope, id, {
            terraformResourceType: 'cloudflare_zero_trust_access_ai_controls_mcp_portal',
            terraformGeneratorMetadata: {
                providerName: 'cloudflare',
                providerVersion: '5.19.0'
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle,
            provisioners: config.provisioners,
            connection: config.connection,
            forEach: config.forEach
        });
        this._accountId = config.accountId;
        this._allowCodeMode = config.allowCodeMode;
        this._description = config.description;
        this._hostname = config.hostname;
        this._id = config.id;
        this._name = config.name;
        this._secureWebGateway = config.secureWebGateway;
        this._servers.internalValue = config.servers;
    }
    // ==========
    // ATTRIBUTES
    // ==========
    // account_id - computed: false, optional: true, required: false
    _accountId;
    get accountId() {
        return this.getStringAttribute('account_id');
    }
    set accountId(value) {
        this._accountId = value;
    }
    resetAccountId() {
        this._accountId = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get accountIdInput() {
        return this._accountId;
    }
    // allow_code_mode - computed: true, optional: true, required: false
    _allowCodeMode;
    get allowCodeMode() {
        return this.getBooleanAttribute('allow_code_mode');
    }
    set allowCodeMode(value) {
        this._allowCodeMode = value;
    }
    resetAllowCodeMode() {
        this._allowCodeMode = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get allowCodeModeInput() {
        return this._allowCodeMode;
    }
    // created_at - computed: true, optional: false, required: false
    get createdAt() {
        return this.getStringAttribute('created_at');
    }
    // created_by - computed: true, optional: false, required: false
    get createdBy() {
        return this.getStringAttribute('created_by');
    }
    // description - computed: false, optional: true, required: false
    _description;
    get description() {
        return this.getStringAttribute('description');
    }
    set description(value) {
        this._description = value;
    }
    resetDescription() {
        this._description = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get descriptionInput() {
        return this._description;
    }
    // hostname - computed: false, optional: false, required: true
    _hostname;
    get hostname() {
        return this.getStringAttribute('hostname');
    }
    set hostname(value) {
        this._hostname = value;
    }
    // Temporarily expose input value. Use with caution.
    get hostnameInput() {
        return this._hostname;
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
    // modified_at - computed: true, optional: false, required: false
    get modifiedAt() {
        return this.getStringAttribute('modified_at');
    }
    // modified_by - computed: true, optional: false, required: false
    get modifiedBy() {
        return this.getStringAttribute('modified_by');
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
    // secure_web_gateway - computed: true, optional: true, required: false
    _secureWebGateway;
    get secureWebGateway() {
        return this.getBooleanAttribute('secure_web_gateway');
    }
    set secureWebGateway(value) {
        this._secureWebGateway = value;
    }
    resetSecureWebGateway() {
        this._secureWebGateway = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get secureWebGatewayInput() {
        return this._secureWebGateway;
    }
    // servers - computed: true, optional: true, required: false
    _servers = new ZeroTrustAccessAiControlsMcpPortalServersList(this, "servers", false);
    get servers() {
        return this._servers;
    }
    putServers(value) {
        this._servers.internalValue = value;
    }
    resetServers() {
        this._servers.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get serversInput() {
        return this._servers.internalValue;
    }
    // =========
    // SYNTHESIS
    // =========
    synthesizeAttributes() {
        return {
            account_id: cdktf.stringToTerraform(this._accountId),
            allow_code_mode: cdktf.booleanToTerraform(this._allowCodeMode),
            description: cdktf.stringToTerraform(this._description),
            hostname: cdktf.stringToTerraform(this._hostname),
            id: cdktf.stringToTerraform(this._id),
            name: cdktf.stringToTerraform(this._name),
            secure_web_gateway: cdktf.booleanToTerraform(this._secureWebGateway),
            servers: cdktf.listMapper(zeroTrustAccessAiControlsMcpPortalServersToTerraform, false)(this._servers.internalValue),
        };
    }
    synthesizeHclAttributes() {
        const attrs = {
            account_id: {
                value: cdktf.stringToHclTerraform(this._accountId),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            allow_code_mode: {
                value: cdktf.booleanToHclTerraform(this._allowCodeMode),
                isBlock: false,
                type: "simple",
                storageClassType: "boolean",
            },
            description: {
                value: cdktf.stringToHclTerraform(this._description),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            hostname: {
                value: cdktf.stringToHclTerraform(this._hostname),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            id: {
                value: cdktf.stringToHclTerraform(this._id),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            name: {
                value: cdktf.stringToHclTerraform(this._name),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            secure_web_gateway: {
                value: cdktf.booleanToHclTerraform(this._secureWebGateway),
                isBlock: false,
                type: "simple",
                storageClassType: "boolean",
            },
            servers: {
                value: cdktf.listMapperHcl(zeroTrustAccessAiControlsMcpPortalServersToHclTerraform, false)(this._servers.internalValue),
                isBlock: true,
                type: "list",
                storageClassType: "ZeroTrustAccessAiControlsMcpPortalServersList",
            },
        };
        // remove undefined attributes
        return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
    }
}
