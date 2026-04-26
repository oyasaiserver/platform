// https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/workflow
// generated from terraform resource schema
import * as cdktf from 'cdktf';
export function workflowInstancesToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
export function workflowInstancesToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {};
    return attrs;
}
export class WorkflowInstancesOutputReference extends cdktf.ComplexObject {
    isEmptyObject = false;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource, terraformAttribute) {
        super(terraformResource, terraformAttribute, false);
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
    // complete - computed: true, optional: false, required: false
    get complete() {
        return this.getNumberAttribute('complete');
    }
    // errored - computed: true, optional: false, required: false
    get errored() {
        return this.getNumberAttribute('errored');
    }
    // paused - computed: true, optional: false, required: false
    get paused() {
        return this.getNumberAttribute('paused');
    }
    // queued - computed: true, optional: false, required: false
    get queued() {
        return this.getNumberAttribute('queued');
    }
    // running - computed: true, optional: false, required: false
    get running() {
        return this.getNumberAttribute('running');
    }
    // terminated - computed: true, optional: false, required: false
    get terminated() {
        return this.getNumberAttribute('terminated');
    }
    // waiting - computed: true, optional: false, required: false
    get waiting() {
        return this.getNumberAttribute('waiting');
    }
    // waiting_for_pause - computed: true, optional: false, required: false
    get waitingForPause() {
        return this.getNumberAttribute('waiting_for_pause');
    }
}
export function workflowLimitsToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        steps: cdktf.numberToTerraform(struct.steps),
    };
}
export function workflowLimitsToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {
        steps: {
            value: cdktf.numberToHclTerraform(struct.steps),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
    };
    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}
export class WorkflowLimitsOutputReference extends cdktf.ComplexObject {
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
        if (this._steps !== undefined) {
            hasAnyValues = true;
            internalValueResult.steps = this._steps;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._steps = undefined;
        }
        else if (cdktf.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._steps = value.steps;
        }
    }
    // steps - computed: false, optional: true, required: false
    _steps;
    get steps() {
        return this.getNumberAttribute('steps');
    }
    set steps(value) {
        this._steps = value;
    }
    resetSteps() {
        this._steps = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get stepsInput() {
        return this._steps;
    }
}
/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/workflow cloudflare_workflow}
*/
export class Workflow extends cdktf.TerraformResource {
    // =================
    // STATIC PROPERTIES
    // =================
    static tfResourceType = "cloudflare_workflow";
    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTF code for importing a Workflow resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the Workflow to import
    * @param importFromId The id of the existing Workflow that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/workflow#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the Workflow to import is found
    */
    static generateConfigForImport(scope, importToId, importFromId, provider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "cloudflare_workflow", importId: importFromId, provider });
    }
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/workflow cloudflare_workflow} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options WorkflowConfig
    */
    constructor(scope, id, config) {
        super(scope, id, {
            terraformResourceType: 'cloudflare_workflow',
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
        this._className = config.className;
        this._limits.internalValue = config.limits;
        this._scriptName = config.scriptName;
        this._workflowName = config.workflowName;
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
    // class_name - computed: false, optional: false, required: true
    _className;
    get className() {
        return this.getStringAttribute('class_name');
    }
    set className(value) {
        this._className = value;
    }
    // Temporarily expose input value. Use with caution.
    get classNameInput() {
        return this._className;
    }
    // created_on - computed: true, optional: false, required: false
    get createdOn() {
        return this.getStringAttribute('created_on');
    }
    // id - computed: true, optional: false, required: false
    get id() {
        return this.getStringAttribute('id');
    }
    // instances - computed: true, optional: false, required: false
    _instances = new WorkflowInstancesOutputReference(this, "instances");
    get instances() {
        return this._instances;
    }
    // is_deleted - computed: true, optional: false, required: false
    get isDeleted() {
        return this.getNumberAttribute('is_deleted');
    }
    // limits - computed: false, optional: true, required: false
    _limits = new WorkflowLimitsOutputReference(this, "limits");
    get limits() {
        return this._limits;
    }
    putLimits(value) {
        this._limits.internalValue = value;
    }
    resetLimits() {
        this._limits.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get limitsInput() {
        return this._limits.internalValue;
    }
    // modified_on - computed: true, optional: false, required: false
    get modifiedOn() {
        return this.getStringAttribute('modified_on');
    }
    // name - computed: true, optional: false, required: false
    get name() {
        return this.getStringAttribute('name');
    }
    // script_name - computed: false, optional: false, required: true
    _scriptName;
    get scriptName() {
        return this.getStringAttribute('script_name');
    }
    set scriptName(value) {
        this._scriptName = value;
    }
    // Temporarily expose input value. Use with caution.
    get scriptNameInput() {
        return this._scriptName;
    }
    // terminator_running - computed: true, optional: false, required: false
    get terminatorRunning() {
        return this.getNumberAttribute('terminator_running');
    }
    // triggered_on - computed: true, optional: false, required: false
    get triggeredOn() {
        return this.getStringAttribute('triggered_on');
    }
    // version_id - computed: true, optional: false, required: false
    get versionId() {
        return this.getStringAttribute('version_id');
    }
    // workflow_name - computed: false, optional: false, required: true
    _workflowName;
    get workflowName() {
        return this.getStringAttribute('workflow_name');
    }
    set workflowName(value) {
        this._workflowName = value;
    }
    // Temporarily expose input value. Use with caution.
    get workflowNameInput() {
        return this._workflowName;
    }
    // =========
    // SYNTHESIS
    // =========
    synthesizeAttributes() {
        return {
            account_id: cdktf.stringToTerraform(this._accountId),
            class_name: cdktf.stringToTerraform(this._className),
            limits: workflowLimitsToTerraform(this._limits.internalValue),
            script_name: cdktf.stringToTerraform(this._scriptName),
            workflow_name: cdktf.stringToTerraform(this._workflowName),
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
            class_name: {
                value: cdktf.stringToHclTerraform(this._className),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            limits: {
                value: workflowLimitsToHclTerraform(this._limits.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "WorkflowLimits",
            },
            script_name: {
                value: cdktf.stringToHclTerraform(this._scriptName),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            workflow_name: {
                value: cdktf.stringToHclTerraform(this._workflowName),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
        };
        // remove undefined attributes
        return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
    }
}
