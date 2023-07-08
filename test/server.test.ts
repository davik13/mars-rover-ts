import { SimpleCommand } from "../src/rover/command/SimpleCommand";

describe("Server", () => {
  let mockSend: jest.Mock;
  let mockMoveCoordinates: jest.Mock;
  let mockResponse: any;
  let missionControl: any;

  beforeEach(() => {
    mockSend = jest.fn();
    mockMoveCoordinates = jest.fn();
    mockResponse = {
      send: mockSend,
    };
    missionControl = {
      moveCoordinates: mockMoveCoordinates,
    };
  });

  it("should send the 'A' command", () => {
    const mockRequest: any = {
      params: {
        command: "A",
      },
    };

    const server = require("../src/server");

    server.sendCommand(mockRequest, mockResponse, missionControl);

    expect(mockMoveCoordinates).toHaveBeenCalledWith(expect.any(SimpleCommand));
    expect(mockSend).toHaveBeenCalledWith(`Command "A" sent successfully.`);
  });

  it("should send the 'R' command", () => {
    const mockRequest: any = {
      params: {
        command: "R",
      },
    };

    const server = require("../src/server");
    server.sendCommand(mockRequest, mockResponse, missionControl);

    expect(mockMoveCoordinates).toHaveBeenCalledWith(expect.any(SimpleCommand));
    expect(mockSend).toHaveBeenCalledWith(`Command "R" sent successfully.`);
  });

  it("should send the 'D' command", () => {
    const mockRequest: any = {
      params: {
        command: "D",
      },
    };

    const server = require("../src/server");
    server.sendCommand(mockRequest, mockResponse, missionControl);

    expect(mockMoveCoordinates).toHaveBeenCalledWith(expect.any(SimpleCommand));
    expect(mockSend).toHaveBeenCalledWith(`Command "D" sent successfully.`);
  });

  it("should send the 'G' command", () => {
    const mockRequest: any = {
      params: {
        command: "G",
      },
    };

    const server = require("../src/server");
    server.sendCommand(mockRequest, mockResponse, missionControl);

    expect(mockMoveCoordinates).toHaveBeenCalledWith(expect.any(SimpleCommand));
    expect(mockSend).toHaveBeenCalledWith(`Command "G" sent successfully.`);
  });
});
