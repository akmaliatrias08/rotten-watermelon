import { Test, TestingModule } from '@nestjs/testing';
import { RolesService } from './roles.service';
import { DatabaseModule } from '../database/database.module';
import { CreateRoleDTO } from './dto/create-role.dto';
import { v4 as uuidv4 } from 'uuid';
import { ResponseUtil } from '../utils/response.util';
import { BadRequestException, HttpException, HttpStatus, NotFoundException } from '@nestjs/common';

describe('RolesService', () => {
  let service: RolesService;

  const mockRolesService = {
    getAll: jest.fn(), 
    getById: jest.fn(), 
    create: jest.fn(),
    save: jest.fn(),
    updateById: jest.fn(), 
    deleteById: jest.fn(),
  }

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        RolesService, 
        {
          provide: RolesService, 
          useValue: mockRolesService
        }
      ], 
      imports: [DatabaseModule]
    }).compile();

    service = module.get<RolesService>(RolesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  describe('createRole', () => {
    it('should create a role', async () => {
      const createRoleDTO = { role: "user" } as CreateRoleDTO;
      const expectedResult = ResponseUtil.success({id: uuidv4(), role: createRoleDTO.role}, HttpStatus.CREATED)

      // mock create to return a expected value
      mockRolesService.create.mockReturnValue(expectedResult);

      // mock save to return a expected value
      mockRolesService.save.mockResolvedValue(expectedResult);

      const result = await service.create(createRoleDTO)

      expect(mockRolesService.create).toBeCalled();
      expect(mockRolesService.create).toBeCalledWith(createRoleDTO);

      expect(result).toEqual(expectedResult)
    })
  })

  describe('findAllRole', () => {
    it('should return all role as array', async () => {
      const role = {
        id: uuidv4(),
        role: "user"
      }
      const roles = [role]
      const expectedResponse = ResponseUtil.success(roles)

      // mock findAll to return a expected value
      mockRolesService.getAll.mockReturnValue(expectedResponse);

      const result = await service.getAll()

      expect(result).toEqual(expectedResponse)
      expect(mockRolesService.getAll).toBeCalled();
    })
  })

  describe('findRoleById', () => {
    it('should find a role by a given id and return its data', () => {
      const id = "57b6f65a-5f58-46a8-bc5b-0453f8a8cbc3"
      const role = {
        id: "57b6f65a-5f58-46a8-bc5b-0453f8a8cbc3",
        role: "user"
      }

      const expectedResponse = ResponseUtil.success(role)

      // mock findAll to return a expected value
      mockRolesService.getById.mockReturnValue(expectedResponse)

      const result = service.getById(id)

      expect(result).toEqual(expectedResponse);
      expect(mockRolesService.getById).toBeCalled();
      expect(mockRolesService.getById).toBeCalledWith(id);
    })

    it('should throw not found execption if record not found', async () => {
      // mock update to return a expected value
      mockRolesService.deleteById.mockResolvedValue(null)

      const id = 'test-id';
      const expectedError = ResponseUtil.error(
          'record not found',
          `record with id = ${id} in table mst_roles not found`,
          HttpStatus.NOT_FOUND,
      );

      try {
          await service.getById(id);
      } catch (e) {
          expect(e).toBeInstanceOf(NotFoundException);
          expect(e.response).toEqual(expectedError);
      }
    })
  })

  describe("updateRoleById", () => {
    it('should update a role by id and return a role', () => {
      const id = uuidv4()
      const updateRoleDTO = { role: "updated-role" }
      const role = { id, role: updateRoleDTO.role }

      const expectedResponse = ResponseUtil.success(role)

      // mock update to return a expected value
      mockRolesService.updateById.mockReturnValue(expectedResponse)

      const result = service.updateById(id, updateRoleDTO)

      expect(result).toEqual(expectedResponse);
      expect(mockRolesService.updateById).toBeCalled();
      expect(mockRolesService.updateById).toBeCalledWith(id, updateRoleDTO);
    })
  })

  describe("deleteByRoleId", () => {
    it('should delete and return the book id', async() => {
      // mock update to return a expected value
      const id = "57b6f65a-5f58-46a8-bc5b-0453f8a8cbc3"
      const expectedResult = ResponseUtil.success({id});

      mockRolesService.deleteById.mockReturnValue(expectedResult);

      const result = await service.deleteById(id)

      expect(mockRolesService.deleteById).toHaveBeenCalledWith(id)
      expect(result).toEqual(expectedResult)
    })
  })
});
