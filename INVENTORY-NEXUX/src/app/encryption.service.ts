// encryption.service.ts
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EncryptionService {
  encrypt(data: string): string {
    return btoa(data); // Simple base64 encoding
  }

  decrypt(data: string): string {
    return atob(data); // Simple base64 decoding
  }
}
