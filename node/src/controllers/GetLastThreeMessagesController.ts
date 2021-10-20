import { Request, Response } from "express";
import { GetLastThreeMessagesService } from "../services/GetLastThreeMessagesService";

class GetLastThreeMessagesController {
  async handle(_request: Request, response: Response) {
    const service = new GetLastThreeMessagesService();

    try {
      const result = await service.execute();
      return response.json(result);
    } catch (error) {
      return response.json({ error: error.message });
    }
  }
}

export { GetLastThreeMessagesController };
