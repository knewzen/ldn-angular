"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
const node_1 = require("@angular-devkit/core/node");
const fs_1 = require("fs");
const path_1 = require("path");
class FileSystemHost {
    constructor(_root) {
        this._root = _root;
    }
    listDirectory(path) {
        return fs_1.readdirSync(path_1.join(this._root, path));
    }
    isDirectory(path) {
        return node_1.fs.isDirectory(path_1.join(this._root, path));
    }
    readFile(path) {
        return fs_1.readFileSync(path_1.join(this._root, path));
    }
    exists(path) {
        return fs_1.existsSync(this.join(this._root, path));
    }
    join(path1, path2) {
        return path_1.join(path1, path2);
    }
}
exports.FileSystemHost = FileSystemHost;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmlsZS1zeXN0ZW0taG9zdC5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvaGFuc2wvU291cmNlcy9oYW5zbC9kZXZraXQvIiwic291cmNlcyI6WyJwYWNrYWdlcy9hbmd1bGFyX2RldmtpdC9zY2hlbWF0aWNzL3Rvb2xzL2ZpbGUtc3lzdGVtLWhvc3QudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQTs7Ozs7O0dBTUc7QUFDSCxvREFBK0M7QUFFL0MsMkJBQTJEO0FBQzNELCtCQUE0QjtBQUU1QjtJQUNFLFlBQW9CLEtBQWE7UUFBYixVQUFLLEdBQUwsS0FBSyxDQUFRO0lBQUcsQ0FBQztJQUVyQyxhQUFhLENBQUMsSUFBWTtRQUN4QixNQUFNLENBQUMsZ0JBQVcsQ0FBQyxXQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssRUFBRSxJQUFJLENBQUMsQ0FBQyxDQUFDO0lBQzdDLENBQUM7SUFDRCxXQUFXLENBQUMsSUFBWTtRQUN0QixNQUFNLENBQUMsU0FBRSxDQUFDLFdBQVcsQ0FBQyxXQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssRUFBRSxJQUFJLENBQUMsQ0FBQyxDQUFDO0lBQ2hELENBQUM7SUFDRCxRQUFRLENBQUMsSUFBWTtRQUNuQixNQUFNLENBQUMsaUJBQVksQ0FBQyxXQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssRUFBRSxJQUFJLENBQUMsQ0FBQyxDQUFDO0lBQzlDLENBQUM7SUFDRCxNQUFNLENBQUMsSUFBWTtRQUNqQixNQUFNLENBQUMsZUFBVSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssRUFBRSxJQUFJLENBQUMsQ0FBQyxDQUFDO0lBQ2pELENBQUM7SUFFRCxJQUFJLENBQUMsS0FBYSxFQUFFLEtBQWE7UUFDL0IsTUFBTSxDQUFDLFdBQUksQ0FBQyxLQUFLLEVBQUUsS0FBSyxDQUFDLENBQUM7SUFDNUIsQ0FBQztDQUNGO0FBbkJELHdDQW1CQyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCBHb29nbGUgSW5jLiBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICpcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vYW5ndWxhci5pby9saWNlbnNlXG4gKi9cbmltcG9ydCB7IGZzIH0gZnJvbSAnQGFuZ3VsYXItZGV2a2l0L2NvcmUvbm9kZSc7XG5pbXBvcnQgeyBGaWxlU3lzdGVtVHJlZUhvc3QgfSBmcm9tICdAYW5ndWxhci1kZXZraXQvc2NoZW1hdGljcyc7XG5pbXBvcnQgeyBleGlzdHNTeW5jLCByZWFkRmlsZVN5bmMsIHJlYWRkaXJTeW5jIH0gZnJvbSAnZnMnO1xuaW1wb3J0IHsgam9pbiB9IGZyb20gJ3BhdGgnO1xuXG5leHBvcnQgY2xhc3MgRmlsZVN5c3RlbUhvc3QgaW1wbGVtZW50cyBGaWxlU3lzdGVtVHJlZUhvc3Qge1xuICBjb25zdHJ1Y3Rvcihwcml2YXRlIF9yb290OiBzdHJpbmcpIHt9XG5cbiAgbGlzdERpcmVjdG9yeShwYXRoOiBzdHJpbmcpIHtcbiAgICByZXR1cm4gcmVhZGRpclN5bmMoam9pbih0aGlzLl9yb290LCBwYXRoKSk7XG4gIH1cbiAgaXNEaXJlY3RvcnkocGF0aDogc3RyaW5nKSB7XG4gICAgcmV0dXJuIGZzLmlzRGlyZWN0b3J5KGpvaW4odGhpcy5fcm9vdCwgcGF0aCkpO1xuICB9XG4gIHJlYWRGaWxlKHBhdGg6IHN0cmluZykge1xuICAgIHJldHVybiByZWFkRmlsZVN5bmMoam9pbih0aGlzLl9yb290LCBwYXRoKSk7XG4gIH1cbiAgZXhpc3RzKHBhdGg6IHN0cmluZykge1xuICAgIHJldHVybiBleGlzdHNTeW5jKHRoaXMuam9pbih0aGlzLl9yb290LCBwYXRoKSk7XG4gIH1cblxuICBqb2luKHBhdGgxOiBzdHJpbmcsIHBhdGgyOiBzdHJpbmcpIHtcbiAgICByZXR1cm4gam9pbihwYXRoMSwgcGF0aDIpO1xuICB9XG59XG4iXX0=