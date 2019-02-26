"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const document_base_1 = require("./fixtures/document.base");
class DocumentBuilder {
    constructor() {
        this.document = document_base_1.documentBase;
    }
    setTitle(title) {
        this.document.info.title = title;
        return this;
    }
    setDescription(description) {
        this.document.info.description = description;
        return this;
    }
    setVersion(version) {
        this.document.info.version = version;
        return this;
    }
    setTermsOfService(termsOfService) {
        this.document.info.termsOfService = termsOfService;
        return this;
    }
    setContactEmail(email) {
        this.document.info.contact = { email };
        return this;
    }
    setLicense(name, url) {
        this.document.info.license = { name, url };
        return this;
    }
    setHost(host) {
        this.document.host = host;
        return this;
    }
    setBasePath(basePath) {
        this.document.basePath = basePath.startsWith('/')
            ? basePath
            : '/' + basePath;
        return this;
    }
    setExternalDoc(description, url) {
        this.document.externalDocs = { description, url };
        return this;
    }
    setSchemes(...schemes) {
        this.document.schemes = schemes;
        return this;
    }
    addTag(name, description = '') {
        this.document.tags = this.document.tags.concat({ name, description });
        return this;
    }
    addBearerAuth(name = 'Authorization', location = 'header', type = 'apiKey') {
        this.document.securityDefinitions = Object.assign({}, (this.document.securityDefinitions || {}), { bearer: {
                type,
                name,
                in: location
            } });
        return this;
    }
    addOAuth2(flow = 'password', authorizationUrl, tokenUrl, scopes) {
        this.document.securityDefinitions = Object.assign({}, (this.document.securityDefinitions || {}), { oauth2: {
                type: 'oauth2',
                flow,
                authorizationUrl,
                tokenUrl,
                scopes
            } });
        return this;
    }
    build() {
        return this.document;
    }
}
exports.DocumentBuilder = DocumentBuilder;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZG9jdW1lbnQtYnVpbGRlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9leHRlcm5hbC9uZXN0anMtc3dhZ2dlci9kb2N1bWVudC1idWlsZGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBS0EsNERBQXdEO0FBRXhELE1BQWEsZUFBZTtJQUE1QjtRQUNtQixhQUFRLEdBQXNCLDRCQUFZLENBQUM7SUFpRzlELENBQUM7SUEvRlEsUUFBUSxDQUFDLEtBQWE7UUFDM0IsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQztRQUNqQyxPQUFPLElBQUksQ0FBQztJQUNkLENBQUM7SUFFTSxjQUFjLENBQUMsV0FBbUI7UUFDdkMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsV0FBVyxHQUFHLFdBQVcsQ0FBQztRQUM3QyxPQUFPLElBQUksQ0FBQztJQUNkLENBQUM7SUFFTSxVQUFVLENBQUMsT0FBZTtRQUMvQixJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxPQUFPLEdBQUcsT0FBTyxDQUFDO1FBQ3JDLE9BQU8sSUFBSSxDQUFDO0lBQ2QsQ0FBQztJQUVNLGlCQUFpQixDQUFDLGNBQXNCO1FBQzdDLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLGNBQWMsR0FBRyxjQUFjLENBQUM7UUFDbkQsT0FBTyxJQUFJLENBQUM7SUFDZCxDQUFDO0lBRU0sZUFBZSxDQUFDLEtBQWE7UUFDbEMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsT0FBTyxHQUFHLEVBQUUsS0FBSyxFQUFFLENBQUM7UUFDdkMsT0FBTyxJQUFJLENBQUM7SUFDZCxDQUFDO0lBRU0sVUFBVSxDQUFDLElBQVksRUFBRSxHQUFXO1FBQ3pDLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLE9BQU8sR0FBRyxFQUFFLElBQUksRUFBRSxHQUFHLEVBQUUsQ0FBQztRQUMzQyxPQUFPLElBQUksQ0FBQztJQUNkLENBQUM7SUFFTSxPQUFPLENBQUMsSUFBWTtRQUN6QixJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUM7UUFDMUIsT0FBTyxJQUFJLENBQUM7SUFDZCxDQUFDO0lBRU0sV0FBVyxDQUFDLFFBQWdCO1FBQ2pDLElBQUksQ0FBQyxRQUFRLENBQUMsUUFBUSxHQUFHLFFBQVEsQ0FBQyxVQUFVLENBQUMsR0FBRyxDQUFDO1lBQy9DLENBQUMsQ0FBQyxRQUFRO1lBQ1YsQ0FBQyxDQUFDLEdBQUcsR0FBRyxRQUFRLENBQUM7UUFDbkIsT0FBTyxJQUFJLENBQUM7SUFDZCxDQUFDO0lBRU0sY0FBYyxDQUFDLFdBQW1CLEVBQUUsR0FBVztRQUNwRCxJQUFJLENBQUMsUUFBUSxDQUFDLFlBQVksR0FBRyxFQUFFLFdBQVcsRUFBRSxHQUFHLEVBQUUsQ0FBQztRQUNsRCxPQUFPLElBQUksQ0FBQztJQUNkLENBQUM7SUFFTSxVQUFVLENBQUMsR0FBRyxPQUFnQztRQUNuRCxJQUFJLENBQUMsUUFBUSxDQUFDLE9BQU8sR0FBRyxPQUEwQixDQUFDO1FBQ25ELE9BQU8sSUFBSSxDQUFDO0lBQ2QsQ0FBQztJQUVNLE1BQU0sQ0FBQyxJQUFZLEVBQUUsY0FBc0IsRUFBRTtRQUNsRCxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsRUFBRSxJQUFJLEVBQUUsV0FBVyxFQUFFLENBQUMsQ0FBQztRQUN0RSxPQUFPLElBQUksQ0FBQztJQUNkLENBQUM7SUFFTSxhQUFhLENBQ2xCLE9BQWUsZUFBZSxFQUM5QixXQUF3QyxRQUFRLEVBQ2hELE9BQWUsUUFBUTtRQUV2QixJQUFJLENBQUMsUUFBUSxDQUFDLG1CQUFtQixxQkFDNUIsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLG1CQUFtQixJQUFJLEVBQUUsQ0FBQyxJQUM1QyxNQUFNLEVBQUU7Z0JBQ04sSUFBSTtnQkFDSixJQUFJO2dCQUNKLEVBQUUsRUFBRSxRQUFRO2FBQ2IsR0FDRixDQUFDO1FBQ0YsT0FBTyxJQUFJLENBQUM7SUFDZCxDQUFDO0lBRU0sU0FBUyxDQUNkLE9BQStELFVBQVUsRUFDekUsZ0JBQXlCLEVBQ3pCLFFBQWlCLEVBQ2pCLE1BQWU7UUFFZixJQUFJLENBQUMsUUFBUSxDQUFDLG1CQUFtQixxQkFDNUIsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLG1CQUFtQixJQUFJLEVBQUUsQ0FBQyxJQUM1QyxNQUFNLEVBQUU7Z0JBQ04sSUFBSSxFQUFFLFFBQVE7Z0JBQ2QsSUFBSTtnQkFDSixnQkFBZ0I7Z0JBQ2hCLFFBQVE7Z0JBQ1IsTUFBTTthQUNQLEdBQ0YsQ0FBQztRQUNGLE9BQU8sSUFBSSxDQUFDO0lBQ2QsQ0FBQztJQUVNLEtBQUs7UUFDVixPQUFPLElBQUksQ0FBQyxRQUFRLENBQUM7SUFDdkIsQ0FBQztDQUNGO0FBbEdELDBDQWtHQyJ9