package com.devsuperior.movieflix.dto;

import java.io.Serializable;
import java.util.ArrayList;
import java.util.List;

import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;

import com.devsuperior.movieflix.entities.User;

public class UserFullDTO extends UserDTO implements Serializable{
	private static final long serialVersionUID = 1L;
	
	@Size(min = 6, message = "O campo deve ter no mínimo 6 caracteres")
	@NotBlank(message = "Campo requerido")
	private String password;
	
	@NotNull(message = "Campo requerido")
	private List<RoleDTO> roles = new ArrayList<>();
	
	public UserFullDTO() {
	}

	public UserFullDTO(Long id, String name, String email, String password) {
		super(id, name, email);
		this.password = password;
	}

	public UserFullDTO(User entity) {
		super(entity);
		this.password = entity.getPassword();
		entity.getRoles().forEach(x -> this.roles.add(new RoleDTO(x)));
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	public List<RoleDTO> getRoles() {
		return roles;
	}
	
}
