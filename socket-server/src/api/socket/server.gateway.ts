import {
  OnGatewayConnection,
  OnGatewayDisconnect,
  WebSocketGateway,
  WebSocketServer,
} from '@nestjs/websockets';
import { Server, Socket } from 'socket.io';

@WebSocketGateway(9001, {
  cors: {
    origin: 'http://localhost:8080',
  },
})
export class ServerGateway implements OnGatewayConnection, OnGatewayDisconnect {
  constructor() {}

  @WebSocketServer()
  server: Server;

  handleConnection(client: any, ...args: any[]): any {
  }

  handleDisconnect(client: any): any {
  }


}
