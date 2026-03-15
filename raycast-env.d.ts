/// <reference types="@raycast/api">

/* 🚧 🚧 🚧
 * This file is auto-generated from the extension's manifest.
 * Do not modify manually. Instead, update the `package.json` file.
 * 🚧 🚧 🚧 */

/* eslint-disable @typescript-eslint/ban-types */

type ExtensionPreferences = {
  /** API Base URL - SessionDock Local API base URL including /api/v1 */
  "apiBaseUrl": string,
  /** API Token - SessionDock Local API bearer token */
  "apiToken": string
}

/** Preferences accessible in all the extension's commands */
declare type Preferences = ExtensionPreferences

declare namespace Preferences {
  /** Preferences accessible in the `search-sessions` command */
  export type SearchSessions = ExtensionPreferences & {}
  /** Preferences accessible in the `create-session` command */
  export type CreateSession = ExtensionPreferences & {}
  /** Preferences accessible in the `open-latest-session` command */
  export type OpenLatestSession = ExtensionPreferences & {}
}

declare namespace Arguments {
  /** Arguments passed to the `search-sessions` command */
  export type SearchSessions = {}
  /** Arguments passed to the `create-session` command */
  export type CreateSession = {}
  /** Arguments passed to the `open-latest-session` command */
  export type OpenLatestSession = {}
}

