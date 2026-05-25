import { Injectable, Logger } from '@nestjs/common';
import { v4 as uuidv4 } from 'uuid';
import { CreateLeadDto } from './dto/create-lead.dto';

export interface Lead extends CreateLeadDto {
  id: string;
  status: 'new' | 'contacted' | 'qualified' | 'closed';
  createdAt: Date;
}

@Injectable()
export class LeadsService {
  private readonly logger = new Logger(LeadsService.name);
  private readonly leads: Lead[] = [];

  create(dto: CreateLeadDto): Lead {
    const lead: Lead = {
      ...dto,
      id: uuidv4(),
      status: 'new',
      createdAt: new Date(),
    };
    this.leads.push(lead);
    this.logger.log(`New lead captured: ${lead.name} — ${lead.company}`);
    return lead;
  }

  findAll(): Lead[] {
    return this.leads;
  }

  findById(id: string): Lead | undefined {
    return this.leads.find((l) => l.id === id);
  }

  updateStatus(id: string, status: Lead['status']): Lead | undefined {
    const lead = this.findById(id);
    if (lead) lead.status = status;
    return lead;
  }
}
