import { Module } from '@nestjs/common';
import { EmployeeService } from './employee.service';
import { EmployeeResolver } from './employee.resolver';
import { EmployeeController } from './employee.controller';

@Module({
  providers: [EmployeeResolver, EmployeeService],
  controllers: [EmployeeController],
})
export class EmployeeModule {}
