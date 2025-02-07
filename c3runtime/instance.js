"use strict";

{
    globalThis.C3.Plugins.StraniAnelli_Showdown.Instance = class ShowdownInstance extends globalThis.ISDKInstanceBase {
        constructor() {
            super();

            const properties = this._getInitProperties();

            // Initialise object properties
            this._flavor = "github";

            if (properties)		// note properties may be null in some cases
            {
                this._flavor = properties[0];
            }

            showdown.setFlavor(this._flavor);
        }

        _release() {
            super._release();
        }

        _saveToJson() {
            return {
                // data to be saved for savegames
            };
        }

        _loadFromJson(o) {
            // load state for savegames
        }
    };
}
