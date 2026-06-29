// https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/resources/origin_tls_compliance_modes
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface OriginTlsComplianceModesConfig extends cdktf.TerraformMetaArguments {
  /**
  * List of TLS compliance modes that constrain the key-exchange algorithms Cloudflare may use when establishing the TLS connection to the zone's origin. Currently supported values are `fips` (FIPS-approved curves) and `pqh` (post-quantum hybrid). Future modes (e.g. `cnsa2`) may be added; clients should treat unknown values as opaque strings. Multiple modes are combined as the intersection of their permitted algorithm lists; selections whose intersection is empty are rejected. An empty list clears the constraint.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/resources/origin_tls_compliance_modes#value OriginTlsComplianceModes#value}
  */
  readonly value: string[];
  /**
  * Identifier.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/resources/origin_tls_compliance_modes#zone_id OriginTlsComplianceModes#zone_id}
  */
  readonly zoneId: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/resources/origin_tls_compliance_modes cloudflare_origin_tls_compliance_modes}
*/
export class OriginTlsComplianceModes extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "cloudflare_origin_tls_compliance_modes";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a OriginTlsComplianceModes resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the OriginTlsComplianceModes to import
  * @param importFromId The id of the existing OriginTlsComplianceModes that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/resources/origin_tls_compliance_modes#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the OriginTlsComplianceModes to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "cloudflare_origin_tls_compliance_modes", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/resources/origin_tls_compliance_modes cloudflare_origin_tls_compliance_modes} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options OriginTlsComplianceModesConfig
  */
  public constructor(scope: Construct, id: string, config: OriginTlsComplianceModesConfig) {
    super(scope, id, {
      terraformResourceType: 'cloudflare_origin_tls_compliance_modes',
      terraformGeneratorMetadata: {
        providerName: 'cloudflare',
        providerVersion: '5.21.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._value = config.value;
    this._zoneId = config.zoneId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // editable - computed: true, optional: false, required: false
  public get editable() {
    return this.getBooleanAttribute('editable');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // modified_on - computed: true, optional: false, required: false
  public get modifiedOn() {
    return this.getStringAttribute('modified_on');
  }

  // value - computed: false, optional: false, required: true
  private _value?: string[]; 
  public get value() {
    return this.getListAttribute('value');
  }
  public set value(value: string[]) {
    this._value = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }

  // zone_id - computed: false, optional: false, required: true
  private _zoneId?: string; 
  public get zoneId() {
    return this.getStringAttribute('zone_id');
  }
  public set zoneId(value: string) {
    this._zoneId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get zoneIdInput() {
    return this._zoneId;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      value: cdktf.listMapper(cdktf.stringToTerraform, false)(this._value),
      zone_id: cdktf.stringToTerraform(this._zoneId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      value: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._value),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      zone_id: {
        value: cdktf.stringToHclTerraform(this._zoneId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
